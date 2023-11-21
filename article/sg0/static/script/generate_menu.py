# python=3.10.6
# coding=utf-8
'''
@File   generate_menu.py
@Time   2023/09/28
@Author TaylorGy 
@Site   https://github.com/taylorgy
@Desc   Scan all files in the [doc] folder, 
        generete [menu.html] with the file path
        and the title in the first line of each file.
'''
import os

def main():
    root = "../../doc/"
    list_file = os.listdir(root)

    with open("menu.html", 'w', encoding='utf8') as menu:
        # menu.write("<li> <a href=\"./doc/0000\">序章</a> </li>\n")
        for file in list_file:
            with open(os.path.join(root, file), 'r', encoding='utf8') as f:
                title = f.readline()[2:-1]
                chapter = file.split('.')[0]
                route = "p0"
                if 0<= int(chapter) <= 17:
                    route = "p1"
                elif int(chapter) <= 35:
                    route = "p2"
                elif int(chapter) <= 49:
                    route = "ed-kyoju"
                elif int(chapter) <= 73:
                    route = "p3"
                elif int(chapter) <= 93:
                    route = "ed-maho"
                elif int(chapter) <= 112:
                    route = "p4"
                elif int(chapter) <= 122:
                    route = "ed-kagari"
                elif int(chapter) <= 139:
                    route = "ed-kurisu"
                elif int(chapter) <= 300:
                    route = "ed-mayuri"
                elif int(chapter) <= 400:
                    route = "ed-kyoma"
                else:
                    route = "p0"
                
                # <li> <a href="./doc/0000"> Prologue </a> </li>
                # li = "<li> <a href=\"./doc/" + file.split('.')[0] + "\">" + title + "</a> </li>\n"
                li = f"<li class=\"{route}\"> <a href=\"./doc/{chapter}\">{title}</a> </li>\n"
                menu.write(li)

if __name__ == '__main__':
    main()
