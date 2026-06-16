#!/usr/bin/env python3
"""
画像生成AI用プロンプトを含むプレースホルダー画像を生成するツール

使用例:
    python create_placeholder_image.py \
        --filename "servlet-jsp-ch05-01-jsp-architecture.jpg" \
        --prompt "A CUTE, KAWAII, flat vector-style illustration..." \
        --style "Soft pastel colors, rounded shapes" \
        --elements "Left: JSP file" "Center: Arrow" "Right: Servlet" \
        --labels "JSPファイル, Servlet変換" \
        --output "./img/servlet-jsp-ch05-01-jsp-architecture.jpg"
"""

from PIL import Image, ImageDraw, ImageFont
import textwrap
import os
import argparse


def create_placeholder_image(
    filename: str,
    prompt_text: str,
    style_text: str,
    elements: list[str],
    japanese_labels: str,
    output_path: str,
    width: int = 800,
    height: int = 500
):
    """
    画像生成AI用プロンプトを含むプレースホルダー画像を生成

    Args:
        filename: 出力ファイル名（表示用）
        prompt_text: 画像生成AIへのメインプロンプト（英語）
        style_text: スタイル指定（英語）
        elements: 画像に含める要素のリスト
        japanese_labels: 画像内に表示する日本語ラベル
        output_path: 出力先パス
        width: 画像幅（デフォルト: 800）
        height: 画像高さ（デフォルト: 500）
    """
    # グレー背景の画像を作成
    img = Image.new('RGB', (width, height), color='#4a4a4a')
    draw = ImageDraw.Draw(img)

    # フォント設定（日本語対応フォントを使用）
    # 優先順位: Noto Sans CJK JP > IPA Gothic > DejaVuSans > default
    font_paths = [
        "/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc",
        "/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc",
        "/usr/share/fonts/truetype/fonts-japanese-gothic.ttf",
        "/usr/share/fonts/opentype/ipafont-gothic/ipag.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    ]

    font_path = None
    for path in font_paths:
        if os.path.exists(path):
            font_path = path
            break

    try:
        if font_path:
            font_large = ImageFont.truetype(font_path, 18)
            font_medium = ImageFont.truetype(font_path, 14)
            font_small = ImageFont.truetype(font_path, 12)
        else:
            font_large = ImageFont.load_default()
            font_medium = ImageFont.load_default()
            font_small = ImageFont.load_default()
    except:
        font_large = ImageFont.load_default()
        font_medium = ImageFont.load_default()
        font_small = ImageFont.load_default()

    y_position = 30
    text_color = '#ffffff'

    # ファイル名
    draw.text((width // 2, y_position), f"FILE: {filename}", fill=text_color, font=font_large, anchor="mt")
    y_position += 50

    # プロンプトヘッダー
    draw.text((width // 2, y_position), "[PROMPT FOR AI]", fill='#ffd700', font=font_medium, anchor="mt")
    y_position += 35

    # メインプロンプト（折り返し）
    wrapped_prompt = textwrap.wrap(prompt_text, width=70)
    for line in wrapped_prompt[:3]:
        draw.text((width // 2, y_position), line, fill=text_color, font=font_medium, anchor="mt")
        y_position += 22
    y_position += 10

    # スタイル
    draw.text((width // 2, y_position), f"Style: {style_text}", fill='#87ceeb', font=font_small, anchor="mt")
    y_position += 30

    # 要素リスト
    for element in elements[:5]:
        wrapped_element = textwrap.wrap(f"- {element}", width=80)
        for line in wrapped_element:
            draw.text((width // 2, y_position), line, fill=text_color, font=font_small, anchor="mt")
            y_position += 20
    y_position += 15

    # 日本語ラベル
    draw.text((width // 2, y_position), f"Text in image (Japanese): {japanese_labels}", fill='#98fb98', font=font_small, anchor="mt")

    # 画像を保存（出力パスの拡張子に応じてフォーマットを選択）
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    ext = os.path.splitext(output_path)[1].lower()
    if ext == '.png':
        img.save(output_path, 'PNG')
    else:
        img.save(output_path, 'JPEG', quality=90)
    print(f"Created: {output_path}")
    return output_path


def main():
    parser = argparse.ArgumentParser(
        description='画像生成AI用プロンプトを含むプレースホルダー画像を生成'
    )
    parser.add_argument('--filename', '-f', required=True, help='出力ファイル名（表示用）')
    parser.add_argument('--prompt', '-p', required=True, help='画像生成AIへのメインプロンプト（英語）')
    parser.add_argument('--style', '-s', required=True, help='スタイル指定（英語）')
    parser.add_argument('--elements', '-e', nargs='+', required=True, help='画像に含める要素のリスト')
    parser.add_argument('--labels', '-l', required=True, help='画像内に表示する日本語ラベル')
    parser.add_argument('--output', '-o', required=True, help='出力先パス')
    parser.add_argument('--width', '-W', type=int, default=800, help='画像幅（デフォルト: 800）')
    parser.add_argument('--height', '-H', type=int, default=500, help='画像高さ（デフォルト: 500）')

    args = parser.parse_args()

    create_placeholder_image(
        filename=args.filename,
        prompt_text=args.prompt,
        style_text=args.style,
        elements=args.elements,
        japanese_labels=args.labels,
        output_path=args.output,
        width=args.width,
        height=args.height
    )


if __name__ == '__main__':
    main()
