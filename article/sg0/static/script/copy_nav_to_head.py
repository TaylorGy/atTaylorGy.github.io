# python=3.10.6
# coding=utf-8
'''
@File   copy_nav_to_head.py
@Time   2023/10/27
@Author TaylorGy 
@Site   https://github.com/taylorgy
@Desc   Copy the nav section at the bottom
        to the header part of each file
'''
import os

def main():
    root = "../../doc/"
    list_file = os.listdir(root)[1:]

    for file in list_file:
        with open(os.path.join(root, file), 'r+', encoding='utf8') as f:
            lines = f.readlines()
            if len(lines) > 3:
                nav = '\n'.join(lines[-1:])+"\n---\n\n"
                lines.insert(4, nav)

                f.seek(0)
                f.writelines(lines)

if __name__ == '__main__':
    main()

