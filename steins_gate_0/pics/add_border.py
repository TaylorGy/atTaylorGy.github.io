#!E:\Program_Python\Python27\python.exe
# coding: utf-8
import sys, os
import cv2

def main(argv):
    if(len(sys.argv) == 1):
        print("Drag image folder to this file to add border.")
        os.system('pause')
        return -1

    src_folder = sys.argv[1]
    for img_file in os.listdir(src_folder):
        # print type(img_file), img_file
        if img_file.endswith("png"):
            print("processing " + img_file)
            src_img = cv2.imread(os.path.join(src_folder, img_file))
            dst_img = cv2.copyMakeBorder(src_img, 1,1,1,1, cv2.BORDER_CONSTANT)
            # print(dst_img.shape)
            # cv2.imshow("dst_img", dst_img)
            # cv2.waitKey()
            dst_folder = os.path.join( os.path.dirname(src_folder), "dst", os.path.basename(src_folder))
            if not os.path.exists(dst_folder):
                os.makedirs(dst_folder)
            cv2.imwrite(os.path.join(dst_folder, img_file), dst_img)


if __name__ == "__main__":
    main(sys.argv)
