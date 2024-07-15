# Python 3.10.6
# -*- coding: utf-8 -*-
'''
@TaylorGy 2023-01-03
## 功能
- 给 txt 文件中的每一行加上前后双引号，并在末尾加两个空格，以方便 markdown 编辑。
- 将每一行的中-英文或数字之间添加空格
- 如果句末不是句号，则添加句号
- 特定词汇替换
    - LAB
    - LABMem

- 如果安装了 `pyperclip` 包，则将修改后的文本直接复制到剪贴板方便粘贴；
  - 可通过 `pip install pyperclip` 安装。
- 否则将修改后的文本保存为在原目录下【原文件名_new.txt】中。
  - 保存编码默认为 utf-8；读取文件编码为 ANSI。

## 使用
- 直接拖拽 txt 文件至 .py 文件运行
- 在命令行中输入文件路径作为参数
  - `$ python txt_add_quotations.py path/filename.txt`

## 可改进
- 目前只针对 txt 文件，ass、md 文件无法直接使用
  - 可在程序中将其他文件转换为 txt
  - 或添加对其他文件类型读写的支持
- 可尝试在程序内自动安装所需库
  - `os.system()`或`os.popen()`
'''

import sys
import os
import re

def main(file):

    lines =[]
    pattern_zh_en = re.compile(r'([\u4e00-\u9fa5]+)([a-zA-Z0-9]+)')
    pattern_en_zh = re.compile(r'([a-zA-Z0-9]+)([\u4e00-\u9fa5]+)')
    pattern_lab = re.compile(r'\blab\b', re.IGNORECASE)
    pattern_labmem = re.compile(r'\blabmem\b|\blabman\b', re.IGNORECASE)
    PUNCTUATIONS = ['。', '？', '！', '—', '…']

    with open(file, 'r') as f:
        for line in f.readlines():
            # print(repr(line))
            if line == '\n':
                continue
            if line[-1] == '\n':
                line = line[:-1]
            line = re.sub(pattern_zh_en, r'\1 \2', line)
            line = re.sub(pattern_en_zh, r'\1 \2', line)
            line = re.sub(pattern_lab, r'LAB', line)
            line = re.sub(pattern_labmem, r'LABMem', line)
            if line[-1] not in PUNCTUATIONS:
                lines.append(f"“{line}。”  \n")
            else:
                lines.append(f"“{line}”  \n")
            
    try:
        import pyperclip
    except ImportError:
        file = os.path.abspath(file)
        path = os.path.dirname(file)
        filename, ext = os.path.splitext(os.path.basename(file))
        with open(os.path.join(path, filename+"_new", ext),'w', encoding='utf-8') as f:
            f.writelines(lines)
        print("Saved as file.")
    else:
        pyperclip.copy(''.join(lines))
        print("Copied to clipboard.")
    os.system("pause")


if len(sys.argv)>1 & os.path.isfile(sys.argv[1]):
    main(sys.argv[1])

