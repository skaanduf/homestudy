"""
StreamDocs 문서 PDF 다운로더
사용법: python3 streamdocs_download.py <streamdocsId> <총페이지수> <출력파일명>
"""

import urllib.request
import urllib.error
import os
import time
import sys
import concurrent.futures

# ── 설정 (명령행 인자로 덮어씌울 수 있음) ──────────────────────────────────
DOC_ID     = sys.argv[1] if len(sys.argv) > 1 else "bF5lHkVKdoKN8-Nyppwar3tWOreEqjLjULDJMTyWt94"
TOTAL_PAGES = int(sys.argv[2]) if len(sys.argv) > 2 else 125
OUTPUT_PDF  = sys.argv[3] if len(sys.argv) > 3 else f"output_{DOC_ID[:8]}.pdf"
# ───────────────────────────────────────────────────────────────────────────

BASE_URL  = f"https://view.chunjae.co.kr/streamdocs/v4/documents/{DOC_ID}"
PAGES_DIR = f"/tmp/streamdocs_{DOC_ID[:12]}"

os.makedirs(PAGES_DIR, exist_ok=True)

def get_total_pages():
    """서버에서 총 페이지 수 자동 조회"""
    try:
        req = urllib.request.Request(
            f"{BASE_URL}/layout",
            headers={'User-Agent': 'Mozilla/5.0'}
        )
        with urllib.request.urlopen(req, timeout=10) as resp:
            import json
            layout = json.load(resp)
            return len(layout)
    except Exception as e:
        print(f"  페이지 수 자동 조회 실패: {e}")
        return None

def download_page(page_num, retries=3):
    url = f"{BASE_URL}/renderings/{page_num}?zoom=150&jpegQuality=o&renderAnnots=false&increasePrint=false"
    out_path = os.path.join(PAGES_DIR, f"page_{page_num:03d}.png")

    if os.path.exists(out_path) and os.path.getsize(out_path) > 10000:
        return page_num, True, "cached"

    for attempt in range(retries):
        try:
            req = urllib.request.Request(url, headers={
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
            })
            with urllib.request.urlopen(req, timeout=20) as resp:
                data = resp.read()

            if len(data) < 1000:
                return page_num, False, f"too small ({len(data)} bytes)"

            # StreamDocs는 PNG 첫 바이트를 0x01로 변조함 → 0x89로 복원
            if data[0] == 0x01 and data[1:4] == b'PNG':
                data = b'\x89' + data[1:]

            with open(out_path, 'wb') as f:
                f.write(data)

            return page_num, True, f"{len(data)//1024}KB"
        except Exception as e:
            if attempt < retries - 1:
                time.sleep(2)
            else:
                return page_num, False, str(e)[:60]

# 총 페이지 수 자동 조회 (인자 없을 때)
if len(sys.argv) <= 2:
    detected = get_total_pages()
    if detected:
        TOTAL_PAGES = detected
        print(f"총 페이지 수 자동 감지: {TOTAL_PAGES}")

print(f"\n문서 ID : {DOC_ID}")
print(f"총 페이지: {TOTAL_PAGES}")
print(f"출력 파일: {OUTPUT_PDF}")
print(f"임시 폴더: {PAGES_DIR}")
print(f"\n다운로드 시작 (병렬 4개)...\n")

failed = []
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as executor:
    futures = {executor.submit(download_page, p): p for p in range(TOTAL_PAGES)}
    done_count = 0
    for future in concurrent.futures.as_completed(futures):
        page_num, success, msg = future.result()
        done_count += 1
        if not success:
            failed.append(page_num)
            print(f"  실패 page_{page_num:03d}: {msg}")
        if done_count % 10 == 0:
            print(f"  {done_count}/{TOTAL_PAGES} 처리 완료")

print(f"\n다운로드 완료. 실패 페이지: {sorted(failed) if failed else '없음'}")

# 유효한 페이지 수집
page_files = []
for i in range(TOTAL_PAGES):
    path = os.path.join(PAGES_DIR, f"page_{i:03d}.png")
    if os.path.exists(path) and os.path.getsize(path) > 10000:
        page_files.append(path)
    else:
        print(f"  경고: 페이지 {i} 누락")

print(f"\n{len(page_files)}페이지로 PDF 생성 중...")

import img2pdf
with open(OUTPUT_PDF, 'wb') as f:
    f.write(img2pdf.convert(page_files))

size = os.path.getsize(OUTPUT_PDF)
print(f"\nPDF 저장 완료: {OUTPUT_PDF}")
print(f"파일 크기   : {size / 1024 / 1024:.1f} MB  ({len(page_files)}페이지)")
