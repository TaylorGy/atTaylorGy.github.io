#coding=utf8
import os

root = "./doc/"
list_file = os.listdir(root)[1:]

with open("menu.html", 'w', encoding='utf8') as menu:
    menu.write("<li> <a href=\"./doc/0000\"> 序章 </a> </li>\n")
    for file in list_file:
        with open(os.path.join(root, file), 'r', encoding='utf8') as f:
            title = f.readline()[3:-1]
            # <li> <a href="./doc/0000"> Prologue </a> </li>
            li = "<li> <a href=\"" + root + file.split('.')[0] + "\"> " + title + " </a> </li>\n"
            menu.write(li)
