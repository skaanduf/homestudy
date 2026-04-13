import os
import sys
import fitz  # PyMuPDF
import easyocr
from PIL import Image
import numpy as np

def pdf_to_text(pdf_path, output_path=None):
    if not os.path.exists(pdf_path):
        print(f"오류: 파일을 찾을 수 없습니다. ({pdf_path})")
        return

    if output_path is None:
        output_path = pdf_path.rsplit('.', 1)[0] + '.txt'

    print(f"--- 텍스트 추출 시작 (EasyOCR 방식): {pdf_path} ---")
    
    # EasyOCR 리더 초기화 (한글, 영어)
    # 처음 실행 시 모델 파일을 다운로드하므로 시간이 조금 걸릴 수 있습니다.
    print("OCR 모델 초기화 중... (한글, 영어)")
    reader = easyocr.Reader(['ko', 'en'])
    
    # PDF 열기
    doc = fitz.open(pdf_path)
    full_text = []

    for i in range(len(doc)):
        page_num = i + 1
        print(f"[{page_num}/{len(doc)}] 페이지 문독 중...")
        
        # 페이지를 이미지로 변환 (속도와 인식률 사이의 균형을 위해 2.0 배율 사용)
        page = doc.load_page(i)
        pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))
        
        # Pixmap을 numpy array로 변환 (EasyOCR 입력용)
        img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
        img_np = np.array(img)
        
        # OCR 수행
        try:
            results = reader.readtext(img_np, detail=0)
            text = "\n".join(results)
            
            full_text.append(f"\n{'='*20} PAGE {page_num} {'='*20}\n")
            full_text.append(text)
        except Exception as e:
            print(f"페이지 {page_num} 오류: {e}")

    # 결과 저장
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write("".join(full_text))

    print(f"\n--- 추출 완료! ---")
    print(f"저장된 파일: {output_path}")

if __name__ == "__main__":
    target_pdf = "social/천재_중학_사회1_교과서.pdf"
    if len(sys.argv) >= 2:
        target_pdf = sys.argv[1]

    pdf_to_text(target_pdf)
