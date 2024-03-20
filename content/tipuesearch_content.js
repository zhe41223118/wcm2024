var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁(靜態)：\xa0 https://zhe41223118.github.io/wcm2024/ \n 網誌 ： \xa0 https://mde.tw/wcm2024/blog/ \xa0導師各班進度內容 \n 簡報 ： \xa0 https://mde.tw/wcm2024/reveal \n 倉儲 ： \xa0 https://github.com/zhe41223118/wcm2024 \n 本 cmsimde 網際內容管理系統的對應 Template 倉儲: \n https://github.com/mdecycu/cmsimde_site \n 此 Template 將 cmsimde 作為子目錄而非子模組, 使用者可以依照需求自行修改 \n 倉儲對應網站:  https://mde.tw/cmsimde_site \n', 'tags': '', 'url': 'About.html'}, {'title': 'cmsimde', 'text': "網站目錄功能 \n SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'notebook', 'text': '在replit教學內容裡所整理的重點： \n ps：這裡replit操作流程已經做過了這裡不再贅述過多，會以簡化的方式來述說，想要看到詳細的操作步驟，請到 這個網頁 。 \n 1.使用 這個倉儲 來創建自己的倉儲。 \n \n \n', 'tags': '', 'url': 'notebook.html'}, {'title': 'w2', 'text': '在這週上課內容為整理修課導師網站內容題目，和上課新教的新的編輯網站方法。共三項。 \n 1. Disqus \xa0( 未完成 ，會在之後慢慢研究並完成) \n 2. ckmsc39th \n 3. Codespaces \n', 'tags': '', 'url': 'w2.html'}, {'title': 'Disqus', 'text': '以導師網站裡這個頁面給的 範例 。 \n 想試試以這個 參考影片 為基底，製作出一個屬於自網站的Q&A留言系統。 \n 最終希望能完成向導師 這個 頁面一樣的系統。 \n \n', 'tags': '', 'url': 'Disqus.html'}, {'title': 'ckmsc39th', 'text': '在看了 這個倉儲 的貢獻者名單，除了可以看到 各用戶的提交次數與每次提交內容外。 \n 個人在觀看分析後覺得，可以從 這個 網站頁面還能得知： \n (!)各成員提交的時間點及提交統計圖。 \n (2)各成員在當月當日，每天上傳修改資料曲線圖。 \n (3)得知從2/12到6/13這段期間是各成員有push的時間段。 \n (4)同(3)也得知每位成員在各時間段上傳次數多寡。 \n (5)也能統計全員的上傳次數並統計排名。', 'tags': '', 'url': 'ckmsc39th.html'}, {'title': 'Codespaces', 'text': '在繼使用replit 近端 遠端，編輯維護網站後，為新的維護能維護網站的方法。 \n 優缺點總結幾點： \n 1.可以跳過近端反鎖部驟，直接開啟動態網站編輯。 \n 2.幾乎與replit的操作系統一樣。(和其最近更新的動態網站連結亂碼) \n 3.受限於這個只是給你試用的，所以有 每個月的使用時數上限 。 \n 以下連結為使用 Codespaces 編輯維護晚站後的靜態連結： \n https://zhe41223118.github.io/wcm2024 \n \n', 'tags': '', 'url': 'Codespaces.html'}, {'title': 'w3', 'text': '本週整理重點有三。 \n 1.wink建立操作影片。 \n 2.介紹了git的常用指令。(也新增了一些自己收錄的一些指令) \n 3.利用指令分組網站成員倉儲分組為子模組。 \n', 'tags': '', 'url': 'w3.html'}, {'title': 'Wink', 'text': '待補上', 'tags': '', 'url': 'Wink.html'}, {'title': 'git order', 'text': 'git add .  (新增) \n git commit -m "內容" \xa0 (提交及名稱) \n git  push  (推送) \n git version  (查詢目前所使用的 git 版本) \n git status  (一般是用來檢查目前近端改版情況) \n 若在遠端倉儲已經改版了，就必須先 git pull ，將遠端資訊與自己的合併更新，才能在提交新的版本推送至倉儲。 \n git pull=git fetch + git merge \n git\xa0fetch  (將遠端主機的最新內容拉到本地)， git\xa0merge \xa0(用於從指定的commit合併到當前分支) \n git submodule add 自己倉儲網址.git+學號 \xa0(新增分組倉儲的子模組) \n 如果只要取下倉儲主要內容，可以使用 git clone (取一個git倉儲)克隆一份git倉儲，可能該子模組還有其他子模組，就必須加上 --recurse-submodules \n git clone --recurse-submodules  (.git 指定目錄與否) \n ------------------------------------------------------------------------------------------------ \n 以下為自己收錄使用指令(可能有非git指令) \n git submodule update --init (抓下子模組) \n git log (檢視 Git 紀錄 Q鍵離開) \n ls -l (瀏覽) \n pwd (列出現在工作目錄) \n acp ("輸入" 直接上傳) \n dns (將英文名稱轉為數字IP 問server(伺服器)IP地址 DNS會先查詢自己資料庫) \n dir (顯示某個磁碟指定目錄下的全部或部分檔案目錄和子目錄) \n \n', 'tags': '', 'url': 'git order.html'}, {'title': 'submodule', 'text': '主要還是參照導師的 這個影片 和 網頁 來完成的。 \n 整理了導師在影片中應用到的指令： \n git status \n ls -l \n clear \n git submodule add 自己倉儲網址.git空格+學號 \n git add . \n git commit -m "add 學號 submodule" \n git push \n 以上指令。 \n 操作部分是在github的Codespaces上執行，目的是在分組倉儲建立個人子模組。', 'tags': '', 'url': 'submodule.html'}, {'title': 'w4', 'text': '1. https://8000-zhe41223118-wcm2024-g09005qk317.ws-us110.gitpod.io/content/index.html \n 使用 gitpod 來維護倉儲，並獲得權限( .ssh-keygen )。 \n 備註：恩為gitpod它只有每個月50小時的限量，所以使用完需回到gitpod網頁將執行中的倉儲 stop ， \n 在使用git pod上傳時會需要先授權與github的合併存取權，否則會無法上傳。 \n 2-1.Replit靜態網站檢視，需下載 main2.txt 和 static.txt 取得裡面的 main2.py 和 static.py ，之後在  Shell  執行  python3 main2.py  就可以執行倉儲內的靜態網站檢視，要取消執行只要在Shell頁面按下 Ctrl+C 就可以了。 \n 2-2.Replit分組網站建立權限，由於Replit只允許一個倉儲帳號對應，所以分組網站的 每個人 都需要自行在  /home/runner/.ssh  目錄下建立  id_rsa  與  config \n 備註：建議還是使用Gitpod來進行.ssh-keygen，因為replit時常改版 也會以授權等方式來拖延時時間來刪除你的.ssh。 \n 3.使用replit Codespaces Gitpod三種網頁編輯執行動態和靜態網站和維護。 \n 4.期中與期末時需要利用 LaTeX 建立各組的報告，所以需先下載 miktex-portable.7z \n 5.需要利用分組倉儲整理： \n https://github.com/git-guides \n https://git-scm.com/book/zh-tw/v2 \n https://git-scm.com/book/zh/v2 \n A Tutorial for GitHub.pdf \n github學習資源 \n 以上等資料統整至 分組倉儲網站 。', 'tags': '', 'url': 'w4.html'}, {'title': 'w5', 'text': '事前預習了解這週可能會講道內容 iframe 及 相關網站 。', 'tags': '', 'url': 'w5.html'}, {'title': 'file', 'text': 'portable_2024.7z \xa0可攜程式環境檔', 'tags': '', 'url': 'file.html'}, {'title': 'memo', 'text': '課程teams code： ry8vdyo \n \n 課程評分: \n 每週 上課內容與摘要整理， 相關資料收集 與閱讀心得。 \n 學員每週編寫網誌內容\xa0 40% \n 每組 6人 ， 期中 報告題目:  Brython 程式應用！！！！ \xa0 30% \n 期末 報告題目 自選 \xa0 30% \n 。 \n 。 \n 。 \n 。 \n 每周至少維護檢查網站1-2次 ，小組網站非必要只修改小部分，不一人獨行。 \n 雖然最近空閒有點少，但別忘了至少每周更新一下 留言系統 內容，並別忘了去看 怎麼新增進網站裡 。', 'tags': '', 'url': 'memo.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};