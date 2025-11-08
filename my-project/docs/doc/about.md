Mkdocs中文文档<br>
https://hellowac.github.io/mkdocs-docs-zh/user-guide/writing-your-docs/

markdown高阶教程（脚注、表格）<br>
https://blog.csdn.net/sjc_0910/article/details/103749761

加密插件mkdocs-encryptcontent-plugin<br>https://github.com/unverbuggt/mkdocs-encryptcontent-plugin


attr_list扩展md写法，添加图片标题、说明：<br>
![这是Lian](doc_img/about_AttrList_illus.jpg){width="auto" data-title="《其实是没招了》" data-description="师傅你是做什么工作的"}

## Commands

* `mkdocs new [dir-name]` - Create a new project.123
* `mkdocs serve` - Start the live-reloading docs server.
* `mkdocs build` - Build the documentation site.
* `mkdocs -h` - Print help message and exit.

## Project layout

    mkdocs.yml    # The configuration file.
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files.


table

| First Header | Second Header | Third Header | Forth Header | Fifth Header |
| ------------ | ------------- | ------------ | ------------ | ------------ |
| Content Cell | Content Cell  | Content Cell | Content Cell | Content Cell |
| Content Cell | Content Cell  | Content Cell | Content Cell | Content Cell |
| Content Cell | Content Cell  | Content Cell | Content Cell | Content Cell |

!!! pied-piper "问候"
    正在根据本机时间加载问候语...