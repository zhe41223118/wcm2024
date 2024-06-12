var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁： https://zhe41223118.github.io/wcm2024/ \n 網誌 ： https://zhe41223118.github.io/wcm2024/blog \n 簡報 ： https://zhe41223118.github.io/wcm2024/reveal \n 倉儲 ： https://github.com/zhe41223118/wcm2024 \n 本 cmsimde 網際內容管理系統的對應 Template 倉儲: \n https://github.com/mdecycu/cmsimde_site \n 此 Template 將 cmsimde 作為子目錄而非子模組, 使用者可以依照需求自行修改 \n 倉儲對應網站:  https://mde.tw/cmsimde_site \n', 'tags': '', 'url': 'About.html'}, {'title': 'cmsimde', 'text': "網站目錄功能 \n SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'notebook', 'text': '在replit教學內容裡所整理的重點： \n ps：這裡replit操作流程已經做過了這裡不再贅述過多，會以簡化的方式來述說，想要看到詳細的操作步驟，請到 這個網頁 。 \n 1.使用 這個倉儲 來創建自己的倉儲。 \n \n \n \n', 'tags': '', 'url': 'notebook.html'}, {'title': 'w2', 'text': '在這週上課內容為整理修課導師網站內容題目，和上課新教的新的編輯網站方法。共三項。 \n 1. Disqus \xa0( 未完成 ，會在之後慢慢研究並完成) \n 2. ckmsc39th \n 3. Codespaces \n \n', 'tags': '', 'url': 'w2.html'}, {'title': 'Disqus', 'text': '以導師網站裡這個頁面給的 範例 。 \n 想試試以這個 參考影片 為基底，製作出一個屬於自網站的Q&A留言系統。 \n 最終希望能完成向導師 這個 頁面一樣的系統。 \n \n \n', 'tags': '', 'url': 'Disqus.html'}, {'title': 'ckmsc39th', 'text': '在看了 這個倉儲 的貢獻者名單，除了可以看到 各用戶的提交次數與每次提交內容外。 \n 個人在觀看分析後覺得，可以從 這個 網站頁面還能得知： \n (!)各成員提交的時間點及提交統計圖。 \n (2)各成員在當月當日，每天上傳修改資料曲線圖。 \n (3)得知從2/12到6/13這段期間是各成員有push的時間段。 \n (4)同(3)也得知每位成員在各時間段上傳次數多寡。 \n (5)也能統計全員的上傳次數並統計排名。 \n', 'tags': '', 'url': 'ckmsc39th.html'}, {'title': 'Codespaces', 'text': '在繼使用replit 近端 遠端，編輯維護網站後，為新的維護能維護網站的方法。 \n 優缺點總結幾點： \n 1.可以跳過近端反鎖部驟，直接開啟動態網站編輯。 \n 2.幾乎與replit的操作系統一樣。(和其最近更新的動態網站連結亂碼) \n 3.受限於這個只是給你試用的，所以有 每個月的使用時數上限 。 \n 以下連結為使用 Codespaces 編輯維護晚站後的靜態連結： \n https://zhe41223118.github.io/wcm2024 \n \n \n', 'tags': '', 'url': 'Codespaces.html'}, {'title': 'w3', 'text': '本週整理重點有三。 \n 1.wink建立操作影片。 \n 2.介紹了git的常用指令。(也新增了一些自己收錄的一些指令) \n 3.利用指令分組網站成員倉儲分組為子模組。 \n', 'tags': '', 'url': 'w3.html'}, {'title': 'Wink', 'text': '可以至官方網站 下載 需要的版本。 \n 或直接下載這個 安裝檔 。 \n', 'tags': '', 'url': 'Wink.html'}, {'title': 'git order', 'text': 'git add .  (新增) \n git commit -m "內容" \xa0 (提交及名稱) \n git  push  (推送) \n git version  (查詢目前所使用的 git 版本) \n git status  (一般是用來檢查目前近端改版情況) \n 若在遠端倉儲已經改版了，就必須先 git pull ，將遠端資訊與自己的合併更新，才能在提交新的版本推送至倉儲。 \n git pull=git fetch + git merge \n git\xa0fetch  (將遠端主機的最新內容拉到本地)， git\xa0merge \xa0(用於從指定的commit合併到當前分支) \n git submodule add 自己倉儲網址.git+學號 \xa0(新增分組倉儲的子模組) \n 如果只要取下倉儲主要內容，可以使用 git clone (取一個git倉儲)克隆一份git倉儲，可能該子模組還有其他子模組，就必須加上 --recurse-submodules \n git clone --recurse-submodules  (.git 指定目錄與否) \n ------------------------------------------------------------------------------------------------ \n 以下為自己收錄使用指令(可能有非git指令) \n git submodule update --init (抓下子模組) \n git log (檢視 Git 紀錄 Q鍵離開) \n ls -l (瀏覽) \n pwd (列出現在工作目錄) \n acp ("輸入" 直接上傳) \n dns (將英文名稱轉為數字IP 問server(伺服器)IP地址 DNS會先查詢自己資料庫) \n dir (顯示某個磁碟指定目錄下的全部或部分檔案目錄和子目錄) \n \n \n', 'tags': '', 'url': 'git order.html'}, {'title': 'submodule', 'text': '主要還是參照導師的 這個影片 和 網頁 來完成的。 \n 整理了導師在影片中應用到的指令： \n git status \n ls -l \n clear \n git submodule add 自己倉儲網址.git空格+學號 \n git add . \n git commit -m "add 學號 submodule" \n git push \n 以上指令。 \n 操作部分是在github的Codespaces上執行，目的是在分組倉儲建立個人子模組。 \n', 'tags': '', 'url': 'submodule.html'}, {'title': 'w4', 'text': '1. https://8000-zhe41223118-wcm2024-g09005qk317.ws-us110.gitpod.io/content/index.html \n 使用 gitpod 來維護倉儲，並獲得權限( .ssh-keygen )。 \n 備註：恩為gitpod它只有每個月50小時的限量，所以使用完需回到gitpod網頁將執行中的倉儲 stop ， \n 在使用git pod上傳時會需要先授權與github的合併存取權，否則會無法上傳。 \n 2-1.Replit靜態網站檢視，需下載 main2.txt 和 static.txt 取得裡面的 main2.py 和 static.py ，之後在  Shell  執行  python3 main2.py  就可以執行倉儲內的靜態網站檢視，要取消執行只要在Shell頁面按下 Ctrl+C 就可以了。 \n 2-2.Replit分組網站建立權限，由於Replit只允許一個倉儲帳號對應，所以分組網站的 每個人 都需要自行在  /home/runner/.ssh  目錄下建立  id_rsa  與  config \n 備註：建議還是使用Gitpod來進行.ssh-keygen，因為replit時常改版 也會以授權等方式來拖延時時間來刪除你的.ssh。 \n 3.使用replit Codespaces Gitpod三種網頁編輯執行動態和靜態網站和維護。 \n 4.期中與期末時需要利用 LaTeX 建立各組的報告，所以需先下載 miktex-portable.7z \n 5.需要利用分組倉儲整理： \n https://github.com/git-guides \n https://git-scm.com/book/zh-tw/v2 \n https://git-scm.com/book/zh/v2 \n A Tutorial for GitHub.pdf \n github學習資源 \n 以上等資料統整至 分組倉儲網站 。 \n', 'tags': '', 'url': 'w4.html'}, {'title': 'w5', 'text': '事前預習了解這週可能會講到內容 iframe 及 相關網站 。 \n --------------------------------------------------------------------------------------- \n 1.講解Replit分組平台倉儲設定。(詳細觀看 此TY ) \n 主要內容有用 .ssh-keygen 創建自己的 config 和 id_rsa ，刪除重新綁定在replit的倉儲帳號以利重新獲得自己的權限。 \n \n 2.使用 可攜檔 裡的 Putty-solvespace.exe ( STL ) ，零件檢視方法。( 詳細影片 ) \n \xa0 \n 3.如何使用可攜程式近端，維護更新自己及分組倉儲。(網站步驟可以看 這個網站 or YT ) \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': '課程實作操作： \n 1. 根據自己專業，說明 git 的使用和與 ChatGPT 的對話，將內容整理到個人網誌，內容需含 git發展歷史 ， 創作人的履歷 ，以及一般相同專業人士 如何利用git解決內容管理問題 ？ \n 2.如果想在Windows實際使用 demo git client 與 git server ，該如何進行？ \n \n 了解git在不同專業領域的應用 \n 了解從git init到git push的流程 \n \xa0 \n 測試YT超連結上傳(非正式) \n \n', 'tags': '', 'url': 'w6.html'}, {'title': 'git introduce', 'text': '就自己與git的理解，能想到的直覺git就是一個系統的控制代碼庫，內容包含的有創建 上傳 修改 檢視 拉取，能與多位參與者一起設計一個產品，並設有git的分支可以使各位設計者們在不同的分支裡設計 儲存，最後提交合併統整成一個完整的成品。 \n 簡單點就是比方說一個產品有分上下半，我正在做上半部另一個人正在做下半部，最後合併，也可以兩人同時整理上下兩部分，就是最後合併時會有因為彼此設計內容不同而有的衝突問題，需要解決的合併問題。 \n 以上自己所理解關於git的使用。 \n 而經由與chatGTP的尋問和思索得出： \n Git是一個分散式版本控制系統，旨在快速且有效率地處理從小到大的專案， \n 幫助團隊協同開發軟體，追蹤程式的變更，並管理不同版本的程式歷程。 \n 基本的使用程式有： \n git  init (建立一個新的Git儲存庫)/mkdir \n git add .  (將檔案加入至暫存區) \n git commit  - m "內容"  (提交修改) \n git push  (推送修改內容至遠端儲存庫)/ git pull (拉取現在遠端資料庫的最新資料) \n git status  (查看存儲庫狀態) \n git  log (查看提交歷史) \n git  clone (克隆現在存儲庫) \n ------------------------------------------------------------------------------------------------- \n Git是由 Linus Torvalds 於 2005 年開始開發的，當時創作者因個人興趣而創作了 Linux作業系統 ，但當該系統的版本控制 BitKeeper 被停止免費使用時，創作者開始為 Linux的核心創建自己的版本控制系統。 \n 於2005年4月以1.0版本的形式公開發布，最初的版本是基於快照的版本控制系統，本意是提供高速性能和完整的歷史記錄。 \n 隨著時間的推移，Git開始在社會得到了廣泛的應用許多，多個軟體製作都開始採用Git作為主要的版本控制系統。 \n 於2008年GitHub平台的建立，GitHub 提供了強大的協作功能和社交化的開發環境，吸引了許多創作者和專案組的使用，使Git知名度進一步的提升。 \n Git一直在不斷發展和改進，每個版本的更新都包括性能優化、新功能和錯誤修復，使 Git 變得更加穩健和強大。 \n --------------------------------------------------------------------------------------------------\xa0 \n 總的來說，Git 的發展歷史可以追溯到其開發者 Linus Torvalds 對當時版本控制系統的不滿。 \n 而關於創作者， 他最初是為了個人興趣而開發Linux，並將其發布為開源軟體，這是一個極其簡單的作業系統核心，隨著時間的推移，Linux開源項目發展迅速，逐漸成為一個強大的作業系統，廣泛用於服務器、嵌入式設備和超級計算機等領域。 \n Linux的成功之後，創作者開始致力於其他開源項目，包括 Git分散式版本控制系統，而Git 最初是為了管理 Linux內核開發過程中的版本控制而創建的。 \n 在見證了BitKeeper版本控制系統被禁止免費使用後，促使他開發了一個新的版本控制系統，也就是 Git。 \n 簡單來說 Linus Torvalds 是開源社會( Open-source-software movement )的重要領頭人之一。 \n -------------------------------------------------------------------------------------------------- \n Git提供了強大的版本控制和內容管理功能，有助於解決許多與程式、文件和項目管理相關的問題。 \n 1.Git可以 追蹤文件的歷史 變更，並允許用戶輕鬆地回溯到先前的版本，對於開發者來說他們可以隨 時查看、比較和恢復文件的不同版本 ，從而更好地管理。 \n 2.Git 允許用戶創建分支 ，這是代碼庫中獨立的開發線。這使得開發人員可以同時進行多個功能的開發，而不會影響主要代碼庫的穩定性。分支還可以用於實現不同的功能和版本之間的隔離，以及進行測試和修復錯誤。 \n 3.Git是一個分散式版本控制系統， 允許多個開發人員同時在同一個程式庫上工作 ，開發人員可以通過提交和合併程式來協同製作。 \n 4.Git 支持遠端存儲庫 ，可以將程式庫備份到遠端伺服器(如：GitHub)，可以跨不同位置和團隊共享和訪問程式，並提高程式的可用性和可靠性。 \n 5. Git可以與持續集成和持續部署（ CI/CD ）工具集成，使得開發團隊可以自動化測試、構建和部署應用程序，從而加快開發週期並提高代碼品質。 \n', 'tags': '', 'url': 'git introduce.html'}, {'title': 'application', 'text': '在 chatGTP理解裡 demo git client指的是 用於演示或展示 Git功能和操作的 Git客戶端 ， 供簡單易用的用戶界面，可以快速了解 Git 的基本操作和流程，demo git client會模擬 git的常見功能，通常是教學或演示目的而設計的，以幫助用戶更好地理解和應用 git 版本控制系統。 \n 詢問 chatGTP得到這些結論後，自己個人理解為就是對git的基礎灌輸，讓你理解git的運作 原理 如何用及應用，對此我觀看了： git基礎影片 ， 觀看這個網站 。 \n -------------------------------------------------------------------------------------------------------------- \n 在 Windows上使用 git server 。(我首先參考了 這個網站 內容大致理解了如何架設) \n 詢問了chatGTP，大致與事前觀看的網站資訊差不多，但GTP特別說明，一定要安裝下載最新版本的Git for Windows 。 \n 簡單理解就是需先準備好一個適合的環境，然後使用git創建一個資料庫(git init) 設置SSH訪問認證服務，之後只要在新建好的資料夾執行 \n cd ~  \n mkdir git \n  cd git  \n mkdir my-git-server  \n cd my-git-server  \n git init --bare \n', 'tags': '', 'url': 'application.html'}, {'title': 'init to push', 'text': '首先要先啟動好個人的可攜式近端程式： \n 1. 在Y :\\tmp分別建立gitproject\\repository和gitserver\\repository共四個目錄。(mkdir) \n 2. 在gitproject\\repository和gitserver\\repository裡分別再新增名稱為repo1的目錄。 \n 3. 繼2.在Y:\\tmp\\gitproject\\repo1裡新增新檔案 README.md ， \n 內容有： \n echo "Hello, World!" > README.md \n git add README.md \n git commit -m "Initial commit" \n git remote add origin y:\\tmp\\gitserver\\repository\\repo1 \n git push -u origin main \n 4. 在Y:\\tmp\\gitproject> git config --global init.defaultBranch main ， \n 設定git init採用main作為內定主分支， \n 之後使用 git init ，創建 .git 。(如圖 ) \n \n 5. 完成以上步驟後，將Y:\\tmp\\gitproject\\repo1中的倉儲內容送到Y:\\tmp\\gitserver\\repository\\repo1目錄中，在C:\\tmp\\repository>執行 git clone Y:\\tmp\\gitserver\\repository\\repo1。 \n (因為沒有特別說明倉儲clone後的目錄名稱，因此git會將Y:\\tmp\\gitserver\\repository\\repo1內容複製一份放入 C:\\tmp\\repository\\repo1目錄裡) \n 6. Y:\\tmp\\gitserver\\repository\\repo1裡的資料現在已分別存入Y:\\tmp\\gitproject\\repo1與 C:\\tmp\\repository\\repo1裡， 可以分別在這兩個倉儲中進行改版 提交 ，再設法將改版內容 push 到 Y:\\tmp\\gitserver\\repository\\repo1中。 \n (想讓使用者 跨網路存取Windows 操作系統上的倉儲，請參考 這裡 ) \n \n', 'tags': '', 'url': 'init to push.html'}, {'title': 'w8', 'text': '1.介紹教育本質 \n youtube \n 2.如何將影片嵌入進自己網站 \n 將自己想上傳的影片內容先放到yt上，之後至自己的yt影片下 \n 點擊 分享 \n 選擇第一個 嵌入 \n 將顯示在右側的 超連結程式 碼複製 \n 來到動態編輯網站 \n 點擊Source code (最下排笑臉右邊) \n 將複製的超連結內容貼上 \n 完成。 \n (註：如需有特別需要可以修改超連結內容來完成所需 \n 例：width="560" height="315" 為影片的長寬設定) \n', 'tags': '', 'url': 'w8.html'}, {'title': 'w9', 'text': '期中課程整理： 網際內容管理( Web-based Content Management) \n 目的：利用 網頁來管理與個人或專業領域應用相關的內容 \n 網際內容管理課程將網頁內容管理系統與網頁資料放在同一個倉儲中，只要有能夠執行 Python 的雲端或近端環境，開啟網頁編輯程式進行改版，上傳資料可在 Github 倉儲中透過 Pages 的全球資訊伺服器呈現網站內容。 \n 本課管理系統採用 Python Flask 編寫，超文件的以 H 標註進行分頁外，還有elican 與 Reveal.js 等兩個延伸套件 \n Pelican  可用來建立 網誌 ， Reveal.js 則可用來建立網頁上的簡報資料。 \n', 'tags': '', 'url': 'w9.html'}, {'title': 'w10', 'text': '以replit來維護新的分組倉儲，需要應對問題為 r eplit的.shh 協定無法供免費使用者使用，已經透過github系統設定，現在可以直接在replit進行分組維護， \n replit目前只剩下對於使用者的 總資料儲存量 (10G)限制，當資源存取超過上限時，需要回到github下的對應倉儲帳號進行對應手段。 \n 新的分組專案網站： https://github.com/mdewcm2024/1astud-site \n (需在teams留言字串進行加入) \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11', 'text': '在上週w10中已經讓學員加入了新的評分倉儲網站，以replit進行維護。 \n 課程中提到了主要重點： \n 所有學員需將分組的小組組別名稱(g4)新增至評分網站中的，為置於專案目錄下，之後將每位學員的關於本課程內容心得，新增至各組別下的目錄。 \n 這個過程中的困難點就是當多人在同時上傳(push)時，我們要如何應對。 \n 慢慢等人上傳後自己再上傳顯然是不合效率，所以需以課程所學來應對衝突問題。 \n 這裡就是需要利用 分支 處理衝突問題，雖然在上傳時如果當下自己的版本不是最新的，一樣需要將最新的版本git pull下來，然後進入動態網站進行衝突/合併，解決完後才能夠git push上去。 \n 分支：就是在當下的版本的另一條屬於自己的版本，比如說是原本一條的河流，突然變成兩條(甚至以上)，他們在本質上是屬於同一支源流，但每個分支出來會呈現的形式都是不同，最終都會匯聚至大海，而大海就是我們衝突裡的主流，每個人在自己的分支裡做自己想做的，最後要統整合併為一個主流，將每次上傳時都可能遇到的處理衝突問題次數降低。 \n', 'tags': '', 'url': 'w11.html'}, {'title': 'branch', 'text': '將分支會用到的所有程式統整。 \n (這裡只放了有關分支的程式碼，如需更詳細了解可參考 影片一   影片二 ，這兩支導師課堂影片) \n git branch 檢視現有分支 \n git checkout 切換到指定分支 \n git merge main 將分支內容合併給main \n git push origin ？？ 遠端上傳並建立分支 \n git merge ？？ 將分支合併至main (注意檢查自己在哪個branch) \n ------------------------------------------------------------------------------------------------------ \n 執行上述程式後理論上只要 git push 就能成功上傳了，如果這時有人在你做的過程中新增了新東西，可能就要先 git pull 將版本更新至其改的最新版後，進行衝突處理。 \n 可能會出現，如圖下： \n \n 選擇圈中第一行字串輸入後 git pull 即可。 \n 額外補充：ps -a 列出所有執行中的靜動態 \n \n', 'tags': '', 'url': 'branch.html'}, {'title': 'w12', 'text': '1. 開始複習加深前幾周所教學內容 \n 2. 評分網站在 git pull 處理要點 \n 如果自己不是最新版本，在pull後內容會顯示新增 修改的內容 \n WSGIserver( Web Server Gateway Interface )： 具有 高效 、易於使用和可擴展性等特點，是 Python 中用於定義 Web 應用程序與 Web 服務器之間通信的標準界面。( 參考 ) \n 3. 導師心得評語，修改評分網站中個人心得 \n 4. 提到學校網站利用 php ( P HP:\xa0 H ypertext\xa0 P reprocessor )所編寫，提到課程內容進階的關於學校網站排課系統 \n 5. 安裝Claude，AI程式聊天 \n \n', 'tags': '', 'url': 'w12.html'}, {'title': '程式執行', 'text': "這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:['./../cmsimde/static/','./../downloads/py/']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n \n \n \n \n", 'tags': '', 'url': '程式執行.html'}, {'title': '猜數字', 'text': 'https://www.youtube.com/watch?v=nVAZJh5PzEM&t=11s', 'tags': '', 'url': '猜數字.html'}, {'title': 'w13', 'text': '1. 從教務處主機直接擷取資料 \n 2. 利用nssm將擷取來的資料持續保留在頁面 \n 3. 猜數字遊戲 \n 這個 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n # 猜數字遊戲\nfrom browser import document, html, alert\nimport random\n# 跳出文字說明視窗\nalert("開始玩猜數字遊戲")\n# 利用 random 模組中的 randint 取 1~100 間的亂數\n標準答案 = random.randint(1, 100)\n# 利用 input 函式視窗, 取使用者所猜的數字, 轉為整數\n你猜的數字 = int(input("請輸入您所猜 1~100 間的整數:"))\n# 猜測次數起始值設為 1\n猜測次數 = 1\n# 進入重複迴圈, 直到猜對數字\nwhile 標準答案 != 你猜的數字:\n    # 根據使用者所猜的數字, 與答案比較後, 給出提示\n    if 標準答案 < 你猜的數字:\n        alert("猜第" + str(猜測次數) + "次, 太大了，再猜 :)加油")\n    else:\n        alert("猜第" + str(猜測次數) + "次, 太小了，再猜 :)加油")\n    你猜的數字 = int(input("請輸入您所猜 1~100 間的整數:"))\n    # 猜測次數累加\n    猜測次數 += 1\n# 跳出迴圈表示猜對, 給出最後文字說明視窗\nalert("猜對了！答案為" + str(標準答案) + ", 總共猜了" + str(猜測次數) + "次") \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n', 'tags': '', 'url': 'w13.html'}, {'title': '取下各學期班級課表', 'text': '利用以下字串至可攜程式內以 python 執行 \n from flask import Flask, request \nfrom flask_cors import CORS\n\nimport requests\nimport bs4\n\n\'\'\'\n機械設計系各班 classid:\n42310: 42310四設計一訓\n\n42311: 42311四設計一甲\n42312: 42312四設計一乙\n\n42319: 42319四設計系一攜\n42320: 42320四設計二訓\n\n42321: 42321四設計二甲\n42322: 42322四設計二乙\n\n42329: 42329四設計系二攜\n42330: 42330四設計三訓\n\n42331: 42331四設計三甲\n42332: 42332四設計三乙\n\n42339: 42339四設計系三攜\n42340: 42340四設計四訓\n\n42341: 42341四設計四甲\n42342: 42342四設計四乙\n\n42349: 42349四設計系四攜\n\n第 112 學年第 2 學期, 查詢設一甲的班級課表\n\nhttps://localhost:9447/?semester=1122&classid=設一甲\n\'\'\'\n# 將班級中文縮寫與代號存入 mde dict\n\nmde ={\n"設一訓": "42310",\n"設一甲": "42311",\n"設一乙": "42312",\n"設一攜": "42319",\n"設二訓": "42320",\n"設二甲": "42321",\n"設二乙": "42322",\n"設二攜": "42329",\n"設三訓": "42330",\n"設三甲": "42331",\n"設三乙": "42332",\n"設三攜": "42339",\n"設四訓": "42340",\n"設四甲": "42341",\n"設四乙": "42342",\n"設四攜": "42349"\n}\n\napp = Flask(__name__)\nCORS(app)\n\n@app.route(\'/studlist\')\n@app.route(\'/\')\ndef studlist():\n    semester = request.args.get(\'semester\')\n    classid = request.args.get(\'classid\')\n    column = request.args.get(\'column\')\n\n    if semester == None:\n        semester = \'1121\'\n    if classid == None:\n        #設一甲\n        classid = \'設一甲\'\n    # 透過 mde dict 將班級中文縮寫轉為代號\n    try:\n        selclss = mde[classid]\n    except:\n        return "查無資料"\n\n    headers = {\'X-Requested-With\': \'XMLHttpRequest\'}\n\n    url = \'https://qry.nfu.edu.tw/jclass_ajax.php\'\n    #post_var = {\'pselyr\': semester, \'pselclss\': classid}\n    post_var = {\'pselyr\': semester, \'pselclss\': selclss}\n\n    result = requests.post(url, data = post_var, headers = headers)\n    #soup = bs4.BeautifulSoup(result.content, \'lxml\')\n    soup = bs4.BeautifulSoup(result.content, \'lxml\', from_encoding=\'utf-8\')\n    # 列出 soup 物件的字元\n    #print(str(soup))\n    table = soup.find(\'table\', {\'class\': \'tbcls\'})\n    # 添加border屬性\n    table[\'border\'] = "1"\n    # 返回帶有border屬性的table HTML\n    table_html = table.prettify()\n    return table_html\n    #return  str(pselyr) + " + " +str(pseqno)\n\nif __name__ == \'__main__\':\n    app.run(host=\'127.0.0.1\', port=9447, debug=True, ssl_context="adhoc") \n (可以利用 pip list  確認所需模組) 需要Flask和Flask-Cors兩個模組，所用版本也會寫在一旁 \n \n', 'tags': '', 'url': '取下各學期班級課表.html'}, {'title': '設為系統服務', 'text': '將取下資料常駐執行在網路頁面上。 \n 是利用了 NSSM (the Non-Sucking Service Manager)這樣工具。 \n 執行前要先確認先前的程式能夠單獨運行起來， python waitress  模組文獻 \n 1.先在 進階防火牆內-進階輸入規則 ，點擊右側 新增規則 新增9447新的連接埠。 \n 2.經由詢問chatGTB和個人修改後得出 \n from waitress import serve\nimport 9447_nfu as ns\n\nif __name__=="__main__":\n    serve(app, host=\'120.0.0.1\', port=9447, threads=4) \n 以python執行 \n 3.到主機cmd執行 \n nssm edit 9447_nfu 確認設定的目錄 \n 4.到主機-電腦管理-服務與應用程式，查看是否有自己設定的服務器(9447_nfu) \n \n', 'tags': '', 'url': '設為系統服務.html'}, {'title': 'w14', 'text': '1. 複習w14週前課程內容 \n 2. 猜數字程式利用claude(或GPT)了解每段詳情及出處 \n 3. 將猜數字遊戲在近端進行執行 \n \n', 'tags': '', 'url': 'w14.html'}, {'title': 'game分析', 'text': '利用 claude 把 這個game 的.py程式做了詳細拆解分析每段內容 \n \n \n \n', 'tags': '', 'url': 'game分析.html'}, {'title': '近端執行', 'text': '\n 只要啟動(python main.py)近端並且知道 http://10.14.62.45:88/ \xa0，這個網址就能進行遊玩。', 'tags': '', 'url': '近端執行.html'}, {'title': 'w15', 'text': '本週開始將以個人和各組的專案內容開始的自由時間，導師提到的課程內容只有為前幾週的課程重點複習講解，我所聽到的內容為如何更容易的將個人的網誌(code)以別的方式(近端程式)匯出。', 'tags': '', 'url': 'w15.html'}, {'title': 'w16', 'text': '1. 在規定時間內填寫 導師網站 倉儲的問卷回答。(Discussions裡的第一項) \n 2. 依個人各組繼續進行期末作業', 'tags': '', 'url': 'w16.html'}, {'title': 'Q&A', 'text': '完成了w2時想要新增的內容至此頁面，搜尋了官方Disqus的 相關建議與解答 最終完成的初步留言系統，之後想再更新並新增至各個頁面中。 \n \n \n \n \n \n Please enable JavaScript to view the  comments powered by Disqus.', 'tags': '', 'url': 'Q&A.html'}, {'title': '個人專案', 'text': "我想要製作一個俄羅斯方塊。 \n 現在的初版設計為將 這個網站 的資料導入給GPT，然後請他幫我製作一個遊戲的初版代碼。 \n v1.7z \xa0(初版遊戲) \n 內容主要為： \n .html (講述了網頁上各元素的意義和屬性) \n .css (用來幫結構化文件.html 添加樣式的電腦語言) \n .js (一門 支援物件導向程式設計、指令式編程和函數式程式設計 ) \n 三個程式代碼執行，現在這個遊戲是能夠遊玩，但缺點也是很多： \n 1.網頁只能以資料夾所在位置開啟，不能在網址上開啟。 \n 2.遊戲本身過於單調 方塊翻轉問題缺陷。 \n 經過以上幾點問題，我重新將程式整理好 \n V2.7z \xa0(修改後第二版遊戲) \n 新增了： \n 1.遊戲最高分紀錄 \n 2.遊戲開始前玩家名稱輸入 \n 3.按下空白鍵能夠暫停遊戲 \n 但問題也是有的，方塊一樣有修改，卻變得無法轉動，按暫停時遊戲直接結算歸零，遊戲玩家名稱輸入視窗點擊會不斷跳出等。 \n PS： \n from flask import Flask, render_template\n\napp = Flask(__name__)\n\n@app.route('/')\ndef index():\n    return render_template('GAME.html')\n\nif __name__ == '__main__':\n    app.run(host='0.0.0.0', port=8000, debug=True) \n 此為在詢問claude問得的設置遊戲網址的程式代碼(須是.py形式) \n", 'tags': '', 'url': '個人專案.html'}, {'title': '版本', 'text': '我的遊戲個階段版本都放在這裡。 \n 初版： v1.7z \xa0(初定遊戲框架) \n 第一次修訂版： v2.7z \xa0(優化遊戲內容) \n 第二次修訂版： v3.7z \xa0(將遊戲以本機網址位置啟動) \n 第三次修訂版：', 'tags': '', 'url': '版本.html'}, {'title': '改版優化1', 'text': '經過重新修改.py檔的內容，將內容修改為： \n import http.server  # 匯入 HTTP 伺服器模組\nimport socketserver  # 匯入 TCP 伺服器模組\n\nPORT = 8000  # 定義伺服器將監聽的埠號\nDIRECTORY = "."  # 定義伺服器將提供檔案的目錄，"." 表示當前目錄\n\n# 定義一個自訂的請求處理器類別，繼承自 SimpleHTTPRequestHandler\nclass MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):\n    def __init__(self, *args, **kwargs):\n        # 呼叫MyHttpRequestHandler建構函式，並設定目錄參數\n        super().__init__(*args, directory=DIRECTORY, **kwargs)\n\nhandler = MyHttpRequestHandler  # 建立處理器的實例\n\n# 建立一個 TCP 伺服器，綁定到指定的 IP 位址和埠，並使用自訂的請求處理器\nwith socketserver.TCPServer(("192.168.0.41", PORT), handler) as httpd:\n    print(f"Serving at http://192.168.0.41:{PORT}")  # 輸出伺服器啟動的訊息\n    httpd.serve_forever()  # 啟動伺服器，持續監聽並處理請求\n \n \n 此檔名我命名為123.py，只需在自己的可攜程式啟動近端後，執行python 123.py，就能在 \n http://192.168.0.41:8000/GAME.html \xa0這個網址下找到我的遊戲 \n 我的第三次改版遊戲： v3.7z \n 問題： \n 1.我只解決了如何在使用近端啟動，讓遊戲在網址上顯示，遊戲本身還需優化更新 \n 2.我的網址是設定我的本機現在位置，但當我的本機位置改變時，需將123.py的網址再做修改 \n (本機網址查詢影片) \n \n', 'tags': '', 'url': '改版優化1.html'}, {'title': '改版優化2', 'text': '', 'tags': '', 'url': '改版優化2.html'}, {'title': 'file', 'text': '此課程所用到的所有檔案統整都在這裡。 \n portable_2024.7z \xa0可攜程式環境檔 \n main2.txt ， static.txt \xa0replit靜態執行所檔案程式 \n miktex-portable.7z \xa0 期中與期末會用到的 LaTeX \n Wink.exe \xa0影片拍攝安裝檔 \n ------------------------------------------------------------------------------------- \n 分組網站需統整的資料 \n https://github.com/git-guides \n https://git-scm.com/book/zh-tw/v2 \n https://git-scm.com/book/zh/v2 \n A Tutorial for GitHub.pdf \n github學習資源 \n \n 課程教學影片 TY \n', 'tags': '', 'url': 'file.html'}, {'title': 'memo', 'text': '課程teams code： ry8vdyo \n \n 課程評分: \n 每週 上課內容與摘要整理， 相關資料收集 與閱讀心得。 \n 學員每週編寫網誌內容\xa0 40% \n 每組 6人 ， 期中 報告題目:  Brython 程式應用！！！！ \xa0 30% \n 期末 報告題目 自選 \xa0 30% \n', 'tags': '', 'url': 'memo.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};