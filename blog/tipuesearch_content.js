var tipuesearch = {"pages":[{"title":"About","text":"cmsimde 內容管理系統 倉儲: https://github.com/mdecycu/cmsimde_site 網站: https://mde.tw/cmsimde_site/ 簡報: https://mde.tw/cmsimde_site/reveal 網誌: https://mde.tw/cmsimde_site/blog","tags":"misc","url":"./pages/about/"},{"title":"2024 w14-w16 課程整理","text":"本週之後都開始複習前幾週內容及以個人和各組的專案內容開始的自由時間 w14 game分析 利用 claude 把 這個game 的.py程式做了詳細拆解分析每段內容 近端執行 只要啟動(python main.py)近端並且知道 http://10.14.62.45:88/ ，這個網址就能進行遊玩。 w15 以個人和各組的專案內容開始的自由時間，導師提到的課程內容為前幾週的課程重點複習講解， 我所聽到的內容為如何更容易的將個人的網誌(code)以別的方式(近端程式)匯出。 w16 1. 在規定時間內填寫 導師網站 倉儲的問卷回答。(Discussions裡的第一項) 2. 依個人各組繼續進行期末作業 這個 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt 動態頁面超文件). practice_html.txt 動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為 class 後, 在範例導入時透過 instance 引用. # 猜數字遊戲 from browser import document, html, alert import random # 跳出文字說明視窗 alert(\"開始玩猜數字遊戲\") # 利用 random 模組中的 randint 取 1~100 間的亂數 標準答案 = random.randint(1, 100) # 利用 input 函式視窗, 取使用者所猜的數字, 轉為整數 你猜的數字 = int(input(\"請輸入您所猜 1~100 間的整數:\")) # 猜測次數起始值設為 1 猜測次數 = 1 # 進入重複迴圈, 直到猜對數字 while 標準答案 != 你猜的數字: # 根據使用者所猜的數字, 與答案比較後, 給出提示 if 標準答案 < 你猜的數字: alert(\"猜第\" + str(猜測次數) + \"次, 太大了，再猜 :)加油\") else: alert(\"猜第\" + str(猜測次數) + \"次, 太小了，再猜 :)加油\") 你猜的數字 = int(input(\"請輸入您所猜 1~100 間的整數:\")) # 猜測次數累加 猜測次數 += 1 # 跳出迴圈表示猜對, 給出最後文字說明視窗 alert(\"猜對了！答案為\" + str(標準答案) + \", 總共猜了\" + str(猜測次數) + \"次\") 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"2024 w13 課程整理","url":"./2024-Spring-w15-blog-tutorial.html"},{"title":"2024 w13 課程整理","text":"從教務處主機直接擷取資料，利用nssm 擷取網頁資料 1.從教務處主機直接擷取資料 2.利用nssm將擷取來的資料持續保留在頁面 3.猜數字遊戲 這個 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt 動態頁面超文件). practice_html.txt 動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為 class 後, 在範例導入時透過 instance 引用. # 猜數字遊戲 from browser import document, html, alert import random # 跳出文字說明視窗 alert(\"開始玩猜數字遊戲\") # 利用 random 模組中的 randint 取 1~100 間的亂數 標準答案 = random.randint(1, 100) # 利用 input 函式視窗, 取使用者所猜的數字, 轉為整數 你猜的數字 = int(input(\"請輸入您所猜 1~100 間的整數:\")) # 猜測次數起始值設為 1 猜測次數 = 1 # 進入重複迴圈, 直到猜對數字 while 標準答案 != 你猜的數字: # 根據使用者所猜的數字, 與答案比較後, 給出提示 if 標準答案 < 你猜的數字: alert(\"猜第\" + str(猜測次數) + \"次, 太大了，再猜 :)加油\") else: alert(\"猜第\" + str(猜測次數) + \"次, 太小了，再猜 :)加油\") 你猜的數字 = int(input(\"請輸入您所猜 1~100 間的整數:\")) # 猜測次數累加 猜測次數 += 1 # 跳出迴圈表示猜對, 給出最後文字說明視窗 alert(\"猜對了！答案為\" + str(標準答案) + \", 總共猜了\" + str(猜測次數) + \"次\") 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"2024 w13 課程整理","url":"./2024-Spring-w14-blog-tutorial.html"},{"title":"2024 w12 課程整理","text":"複習加深前幾週所教學內容 git pull處理要點 如果自己不是最新版本，在pull後內容會顯示新增 修改的內容 WSGIserver(Web Server Gateway Interface)：具有高效、易於使用和可擴展性等特點，是 Python 中用於定義 Web 應用程序與 Web 服務器之間通信的標準界面。( 參考 ) php 學校網站是利用 php ( PHP: Hypertext Preprocessor )所編寫，課程內容進階的關於學校網站排課系統 取下各學期班級課表 利用以下字串至可攜程式內以 python 執行 from flask import Flask, request from flask_cors import CORS import requests import bs4 ''' 機械設計系各班 classid: 42310: 42310四設計一訓 42311: 42311四設計一甲 42312: 42312四設計一乙 42319: 42319四設計系一攜 42320: 42320四設計二訓 42321: 42321四設計二甲 42322: 42322四設計二乙 42329: 42329四設計系二攜 42330: 42330四設計三訓 42331: 42331四設計三甲 42332: 42332四設計三乙 42339: 42339四設計系三攜 42340: 42340四設計四訓 42341: 42341四設計四甲 42342: 42342四設計四乙 42349: 42349四設計系四攜 第 112 學年第 2 學期, 查詢設一甲的班級課表 https://localhost:9447/?semester=1122&classid=設一甲 ''' # 將班級中文縮寫與代號存入 mde dict mde ={ \"設一訓\": \"42310\", \"設一甲\": \"42311\", \"設一乙\": \"42312\", \"設一攜\": \"42319\", \"設二訓\": \"42320\", \"設二甲\": \"42321\", \"設二乙\": \"42322\", \"設二攜\": \"42329\", \"設三訓\": \"42330\", \"設三甲\": \"42331\", \"設三乙\": \"42332\", \"設三攜\": \"42339\", \"設四訓\": \"42340\", \"設四甲\": \"42341\", \"設四乙\": \"42342\", \"設四攜\": \"42349\" } app = Flask(__name__) CORS(app) @app.route('/studlist') @app.route('/') def studlist(): semester = request.args.get('semester') classid = request.args.get('classid') column = request.args.get('column') if semester == None: semester = '1121' if classid == None: #設一甲 classid = '設一甲' # 透過 mde dict 將班級中文縮寫轉為代號 try: selclss = mde[classid] except: return \"查無資料\" headers = {'X-Requested-With': 'XMLHttpRequest'} url = 'https://qry.nfu.edu.tw/jclass_ajax.php' #post_var = {'pselyr': semester, 'pselclss': classid} post_var = {'pselyr': semester, 'pselclss': selclss} result = requests.post(url, data = post_var, headers = headers) #soup = bs4.BeautifulSoup(result.content, 'lxml') soup = bs4.BeautifulSoup(result.content, 'lxml', from_encoding='utf-8') # 列出 soup 物件的字元 #print(str(soup)) table = soup.find('table', {'class': 'tbcls'}) # 添加border屬性 table['border'] = \"1\" # 返回帶有border屬性的table HTML table_html = table.prettify() return table_html #return str(pselyr) + \" + \" +str(pseqno) if __name__ == '__main__': app.run(host='127.0.0.1', port=9447, debug=True, ssl_context=\"adhoc\") (可以利用 pip list 確認所需模組) 需要Flask和Flask-Cors兩個模組，所用版本也會寫在一旁 猜數字 這個 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt 動態頁面超文件). practice_html.txt 動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為 class 後, 在範例導入時透過 instance 引用. # 猜數字遊戲 from browser import document, html, alert import random # 跳出文字說明視窗 alert(\"開始玩猜數字遊戲\") # 利用 random 模組中的 randint 取 1~100 間的亂數 標準答案 = random.randint(1, 100) # 利用 input 函式視窗, 取使用者所猜的數字, 轉為整數 你猜的數字 = int(input(\"請輸入您所猜 1~100 間的整數:\")) # 猜測次數起始值設為 1 猜測次數 = 1 # 進入重複迴圈, 直到猜對數字 while 標準答案 != 你猜的數字: # 根據使用者所猜的數字, 與答案比較後, 給出提示 if 標準答案 < 你猜的數字: alert(\"猜第\" + str(猜測次數) + \"次, 太大了，再猜 :)加油\") else: alert(\"猜第\" + str(猜測次數) + \"次, 太小了，再猜 :)加油\") 你猜的數字 = int(input(\"請輸入您所猜 1~100 間的整數:\")) # 猜測次數累加 猜測次數 += 1 # 跳出迴圈表示猜對, 給出最後文字說明視窗 alert(\"猜對了！答案為\" + str(標準答案) + \", 總共猜了\" + str(猜測次數) + \"次\") 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"2024 w12 課程整理","url":"./2024-Spring-w13-blog-tutorial.html"},{"title":"2024 w11 課程整理","text":"在上週w10中已經讓學員加入了新的評分倉儲網站，以replit進行維護。 branch 課程中提到了主要重點： 所有學員需將分組的小組組別名稱(g4)新增至評分網站中的，為置於專案目錄下，之後將每位學員的關於本課程內容心得，新增至各組別下的目錄。 這個過程中的困難點就是當多人在同時上傳(push)時，我們要如何應對。 慢慢等人上傳後自己再上傳顯然是不合效率，所以需以課程所學來應對衝突問題。 這裡就是需要利用分支處理衝突問題，雖然在上傳時如果當下自己的版本不是最新的，一樣需要將最新的版本git pull下來，然後進入動態網站進行衝突/合併，解決完後才能夠git push上去。 分支：就是在當下的版本的另一條屬於自己的版本，比如說是原本一條的河流，突然變成兩條(甚至以上)，他們在本質上是屬於同一支源流，但每個分支出來會呈現的形式都是不同，最終都會匯聚至大海，而大海就是我們衝突裡的主流，每個人在自己的分支裡做自己想做的，最後要統整合併為一個主流，將每次上傳時都可能遇到的處理衝突問題次數降低。 應用 將分支會用到的所有程式統整。 (這裡只放了有關分支的程式碼，如需更詳細了解可參考影片一 影片二，這兩支導師課堂影片) git branch 檢視現有分支 git checkout 切換到指定分支 git merge main 將分支內容合併給main git push origin ？？ 遠端上傳並建立分支 git merge ？？ 將分支合併至main(注意檢查自己在哪個branch) 執行上述程式後理論上只要git push就能成功上傳了，如果這時有人在你做的過程中新增了新東西，可能就要先git pull將版本更新至其改的最新版後，進行衝突處理。 可能會出現 git config pull.rebase fiase git config pull.rebase trus git config pull.ff only 選擇第一行字串輸入後 git pull 即可 額外補充：ps -a 列出所有執行中的靜動態 這個 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt 動態頁面超文件). practice_html.txt 動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為 class 後, 在範例導入時透過 instance 引用. # 猜數字遊戲 from browser import document, html, alert import random # 跳出文字說明視窗 alert(\"開始玩猜數字遊戲\") # 利用 random 模組中的 randint 取 1~100 間的亂數 標準答案 = random.randint(1, 100) # 利用 input 函式視窗, 取使用者所猜的數字, 轉為整數 你猜的數字 = int(input(\"請輸入您所猜 1~100 間的整數:\")) # 猜測次數起始值設為 1 猜測次數 = 1 # 進入重複迴圈, 直到猜對數字 while 標準答案 != 你猜的數字: # 根據使用者所猜的數字, 與答案比較後, 給出提示 if 標準答案 < 你猜的數字: alert(\"猜第\" + str(猜測次數) + \"次, 太大了，再猜 :)加油\") else: alert(\"猜第\" + str(猜測次數) + \"次, 太小了，再猜 :)加油\") 你猜的數字 = int(input(\"請輸入您所猜 1~100 間的整數:\")) # 猜測次數累加 猜測次數 += 1 # 跳出迴圈表示猜對, 給出最後文字說明視窗 alert(\"猜對了！答案為\" + str(標準答案) + \", 總共猜了\" + str(猜測次數) + \"次\") 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"2024 w11 課程整理","url":"./2024-Spring-w12-blog-tutorial.html"},{"title":"2024 w10 課程整理","text":"有關 新的分組倉儲 replit維護新的分組倉儲 需要應對問題為replit的.shh協定無法供免費使用者使用，已經透過github系統設定，現在可以直接在replit進行分組維護， replit目前只剩下對於使用者的 總資料儲存量 (10G)限制，當資源存取超過上限時，需要回到github下的對應倉儲帳號進行對應手段。 新的分組專案網站： https://github.com/mdewcm2024/1astud-site (需在teams留言字串進行加入) Please enable JavaScript to view the comments powered by Disqus.","tags":"2024 w10 課程整理","url":"./2024-Spring-w11-blog-tutorial.html"},{"title":"2024 期中課程整理","text":"有關本堂課 期中重點統整 網頁式內容管理 建立自己倉儲帳號，首先本門課有事先準備好一個範例的倉儲網頁框架，只要至那他上註冊好的個人帳號網址，save後就能克隆該網站，可以選擇是要使用replit或是使用倉儲本身新更新的 codespaces 這兩個或其他軟體進行維護網站，在那之前，需要現建立環境： 在shell 輸入 chmod u+x init_replit 之後 ./init_replit 這樣就能安裝所需的 Python 模組 在儲存庫頁面，點擊 Settings 滾動到 GitHub Pages 部分 在 Source 下拉，選擇儲存庫中的一個分支（ main 或 master）和根目錄（/root），然後點擊 Save 這樣就會看到一條通知，告訴知你的網站已經被發布，稍後就可以在指定的 URL 訪問您的網站 章節式標題 一般在啟動動態編輯網站後就能在上方工具欄中，選擇想要的格式，或到程式編輯，輸入# 為大標題 ## 為小標題，記得需要空格否則將被視為一般字體大小。 AI 想到AI回應系統，我無疑是最先想到 chatGTP 他在本門課程幫助我們解決了很多，我們不懂的程式問題，但如果只是把它當作問題解決工具，卻不會從中學習她幫助我們解決問題的方式，無疑將會讓我們什麼事都問GPT，導師在課堂上也說過，GPT電腦系統是死的，是要我們去掌控他，而不變的只會ctrl+C+V，系統傀儡。 實作練習 書籍閱讀統整 有關程式設計初學者書籍-Programming for Absolute Beginners 本書列出的電腦程式、電腦程式的一部分或任何應該直接（準確）輸入的內容，都會從文字中偏移並以特殊字體書寫，以幫助我們看出它是一個電腦程式。電腦程序將如下： window.alert(\"This is an example of a computer program.\"); 現在的計算程式機種類繁多，每種計算機程式的操作方式也不同，它們載入的系統和軟體，每個都有不同的版本，還有許多不同的網頁瀏覽器，每個瀏覽器都有不同的可用功能以及略有不同的工作方式。 本書引導我們完成設置每個作業系統上的一切。 建議我們使用Google Chrome瀏覽器。 Google Chrome是程式設計師最容易使用的瀏覽器，話雖這麼說，說對於初學者來說應該只是 適用於任何網頁瀏覽器，包括 Brave、Firefox、Safari、Chrome、Opera 或 Edge。 同時多人連線-Web 能否在同一台電腦上啟動服務，且允許多個使用者同時連線，主要取決於服務的配置、硬體資源的有效利用以及服務管理的方法。 如果配置了 Web 伺服器來處理多個連線，通常使用的 Web 伺服器包括 Nginx、Apache 或更專業的 Web 應用伺服器如 Gunicorn（Python 應用）、Unicorn 等。 例： Nginx：一個高效能的反向代理伺服器和負載平衡器，非常適合處理大量的併發連線。 Apache：功能強大且廣泛使用的 Web 伺服器，能夠處理靜態和動態內容。 NSSM 全名- the Non-Sucking Service Manager -服務管理員 用於將任何可執行文件或腳本作為 Windows 服務運行，在系統啟動時自動運行、以高可靠性運行，這在需要將應用程序或腳本設置為系統服務器，或需要在後台長時間運行的情況下特別用。 NSSM 是一個開源項目，其設計目的是彌補 Windows 自帶的服務管理工具的不足之處。 在一台 Windows 電腦快速建立多人帳號 在 Windows 上運行帳號創建腳本： Windows，將 PowerShell 腳本保存為 123.ps1，然後以管理員身份執行 PowerShell 。 運行 Python 電子郵件發送腳本： 將 Python 腳本保存為 123.py，並根據自己的 SMTP 設置進行配置。 輸入執行 python 123.py 發送電子郵件。 使用GPT回應心得 在製作這些程式練習時，我無疑第一時間是先跑去問了GTP來告訴我怎模做，但有些時候其實我覺得他給我的回應並不是我希望的，所以我往往要在這個地方反覆的去尋問他，而不只有用GPT在課堂上導師還介紹了，Google Gemini Pro ， claude.ai 這兩個系統也是我在遇到問題時會去詢問的地方，其中他們的比較我認為是差不多的，都一樣是大數據分析後回應我的結果，但其實三種系統會回應我的內容是不同的，有些時候出來的結果雖然是一樣的，差異卻還是有的，可能是我在每個地方詢問時對想要呈現事務的述說都不相同，但我認為就算說的內容都相同，依照他大數據回應都是從中隨機選擇回答，應該讓我的作法都不會一樣，但在製作的過程，我真認為有些限制真的很麻煩，claude可以無限上傳檔案，卻限制詢問次數 GPT無限制詢問次數，卻限制上傳檔案次數，想要無限制或更好的詢問結果無疑都是要我加錢升級。 Please enable JavaScript to view the comments powered by Disqus.","tags":"2024 w9 課程整理","url":"./2024-Spring-w10-blog-tutorial.html"},{"title":"2024 w9 課程整理","text":"有關本堂課 網際內容管理-Web-based Content Management 相關內容 本門課的目的：利用網頁來管理與個人或專業領域應用相關的內容 網際內容管理課程將網頁內容管理系統與網頁資料放在同一個倉儲中，只要有能夠執行 Python 的雲端或近端環境，開啟網頁編輯程式進行改版，上傳資料可在 Github 倉儲中透過 Pages 的全球資訊伺服器呈現網站內容。 本課管理系統採用 Python Flask 編寫，超文件的以 H 標註進行分頁外，還有elican 與 Reveal.js 等兩個延伸套件 Pelican 可用來建立網誌， Reveal.js 則可用來建立網頁上的簡報資料。 Please enable JavaScript to view the comments powered by Disqus.","tags":"2024 w9 課程整理","url":"./2024-Spring-w9-blog-tutorial.html"},{"title":"2024 w8 課程整理","text":"有關 教育本質,超連結嵌入影片 教育本質 介紹教育本質，相關影片如下： 如何將影片嵌入進自己網站 將自己想上傳的影片內容 先放到yt上，之後至自己的yt影片下 點擊分享 選擇第一個嵌入 將顯示在右側的超連結程式碼複製 來到動態編輯網站 點擊Source code(最下排笑臉右邊) 將複製的超連結內容貼上 完成。 (註：如需有特別需要可以修改超連結內容來完成所需 例：width=\"560\" height=\"315\" 為影片的長寬設定) Please enable JavaScript to view the comments powered by Disqus.","tags":"2024 w8 課程整理","url":"./2024-Spring-w8-blog-tutorial.html"},{"title":"2024 w6 課程整理","text":"有關說明 git, GPT，git基礎使用 自己對git的使用 就自己與git的理解，能想到的直覺git就是一個系統的控制代碼庫，內容包含的有創建 上傳 修改 檢視 拉取，能與多位參與者一起設計一個產品，並設有git的分支可以使各位設計者們在不同的分支裡設計 儲存，最後提交合併統整成一個完整的成品。 簡單點就是比方說一個產品有分上下半，我正在做上半部另一個人正在做下半部，最後合併，也可以兩人同時整理上下兩部分，就是最後合併時會有因為彼此設計內容不同而有的衝突問題，需要解決的合併問題。 以上自己所理解關於git的使用。 而經由與chatGTP的尋問和思索得出： Git是一個分散式版本控制系統，旨在快速且有效率地處理從小到大的專案，幫助團隊協同開發軟體，追蹤程式的變更，並管理不同版本的程式歷程。 基本的使用程式有： git init (建立一個新的Git儲存庫)/mkdir git add . (將檔案加入至暫存區) git commit -m \"內容\" (提交修改) git push (推送修改內容至遠端儲存庫)/git pull(拉取現在遠端資料庫的最新資料) git status (查看存儲庫狀態) git log (查看提交歷史) git clone (克隆現在存儲庫) 與ChatGPT的對話 Git是由 Linus Torvalds 於 2005 年開始開發的，當時創作者因個人興趣而創作了 Linux作業系統 ，但當該系統的版本控制 BitKeeper 被停止免費使用時，創作者開始為 Linux的核心創建自己的版本控制系統。 於2005年4月以1.0版本的形式公開發布，最初的版本是基於快照的版本控制系統，本意是提供高速性能和完整的歷史記錄。 隨著時間的推移，Git開始在社會得到了廣泛的應用許多，多個軟體製作都開始採用Git作為主要的版本控制系統。 於2008年GitHub平台的建立，GitHub 提供了強大的協作功能和社交化的開發環境，吸引了許多創作者和專案組的使用，使Git知名度進一步的提升。 Git一直在不斷發展和改進，每個版本的更新都包括性能優化、新功能和錯誤修復，使 Git 變得更加穩健和強大。 總的來說，Git 的發展歷史可以追溯到其開發者Linus Torvalds對當時版本控制系統的不滿。 而關於創作者，他最初是為了個人興趣而開發Linux，並將其發布為開源軟體，這是一個極其簡單的作業系統核心，隨著時間的推移，Linux開源項目發展迅速，逐漸成為一個強大的作業系統，廣泛用於服務器、嵌入式設備和超級計算機等領域。 Linux的成功之後，創作者開始致力於其他開源項目，包括 Git分散式版本控制系統，而Git 最初是為了管理 Linux內核開發過程中的版本控制而創建的。 在見證了BitKeeper版本控制系統被禁止免費使用後，促使他開發了一個新的版本控制系統，也就是 Git。 簡單來說Linus Torvalds是開源社會( Open-source-software movement )的重要領頭人之一。 Git提供了強大的版本控制和內容管理功能，有助於解決許多與程式、文件和項目管理相關的問題。 1.Git可以追蹤文件的歷史變更，並允許用戶輕鬆地回溯到先前的版本，對於開發者來說他們可以隨時查看、比較和恢復文件的不同版本，從而更好地管理。 2.Git允許用戶創建分支，這是代碼庫中獨立的開發線。這使得開發人員可以同時進行多個功能的開發，而不會影響主要代碼庫的穩定性。分支還可以用於實現不同的功能和版本之間的隔離，以及進行測試和修復錯誤。 3.Git是一個分散式版本控制系統，允許多個開發人員同時在同一個程式庫上工作，開發人員可以通過提交和合併程式來協同製作。 4.Git支持遠端存儲庫，可以將程式庫備份到遠端伺服器(如：GitHub)，可以跨不同位置和團隊共享和訪問程式，並提高程式的可用性和可靠性。 Git可以與持續集成和持續部署（ CI/CD ）工具集成，使得開發團隊可以自動化測試、構建和部署應用程序，從而加快開發週期並提高代碼品質。 git application 在chatGTP理解裡demo git client指的是用於演示或展示 Git功能和操作的 Git客戶端，供簡單易用的用戶界面，可以快速了解 Git 的基本操作和流程，demo git client會模擬 git的常見功能，通常是教學或演示目的而設計的，以幫助用戶更好地理解和應用 git 版本控制系統。 詢問chatGTP得到這些結論後，自己個人理解為就是對git的基礎灌輸，讓你理解git的運作 原理 如何用及應用，對此我觀看了：git基礎影片，觀看這個網站。 使用demo git client與git server 在Windows上使用git server。(我首先參考了 這個網站 內容大致理解了如何架設) 詢問了chatGTP，大致與事前觀看的網站資訊差不多，但GTP特別說明，一定要安裝下載最新版本的Git for Windows 。 簡單理解就是需先準備好一個適合的環境，然後使用git創建一個資料庫(git init) 設置SSH訪問認證服務，之後只要在新建好的資料夾執行 cd ~ mkdir git cd git mkdir my-git-server cd my-git-server git init --bare init to push 首先要先啟動好個人的可攜式近端程式： 1.在Y:\\tmp分別建立gitproject\\repository和gitserver\\repository共四個目錄。(mkdir) 2.在gitproject\\repository和gitserver\\repository裡分別再新增名稱為repo1的目錄。 3.繼2.在Y:\\tmp\\gitproject\\repo1裡新增新檔案README.md， 內容有： echo \"Hello, World!\" > README.md git add README.md git commit -m \"Initial commit\" git remote add origin y:\\tmp\\gitserver\\repository\\repo1 git push -u origin main 4.在Y:\\tmp\\gitproject>git config --global init.defaultBranch main， 設定git init採用main作為內定主分支， 之後使用git init，創建.git。 5.完成以上步驟後，將Y:\\tmp\\gitproject\\repo1中的倉儲內容送到Y:\\tmp\\gitserver\\repository\\repo1目錄中，在C:\\tmp\\repository>執行 git clone Y:\\tmp\\gitserver\\repository\\repo1。 (因為沒有特別說明倉儲clone後的目錄名稱，因此git會將Y:\\tmp\\gitserver\\repository\\repo1內容複製一份放入 C:\\tmp\\repository\\repo1目錄裡) 6.Y:\\tmp\\gitserver\\repository\\repo1裡的資料現在已分別存入Y:\\tmp\\gitproject\\repo1與 C:\\tmp\\repository\\repo1裡，可以分別在這兩個倉儲中進行改版 提交，再設法將改版內容push到 Y:\\tmp\\gitserver\\repository\\repo1中。 (想讓使用者跨網路存取Windows操作系統上的倉儲，請參考 這裡 ) Please enable JavaScript to view the comments powered by Disqus.","tags":"2024 w6 課程整理","url":"./2024-Spring-w6-blog-tutorial.html"},{"title":"2024 w5 課程整理","text":"有關 Replit key建立 Replit key建立 講解Replit分組平台倉儲設定。(詳細觀看 此YT ) 主要內容有用.ssh-keygen創建自己的config和id_rsa，刪除重新綁定在replit的倉儲帳號以利重新獲得自己的權限。 使用自己下載的 可攜程式檔 裡的Putty-solvespace.exe( STL )，零件檢視方法。( 詳細影片 ) Please enable JavaScript to view the comments powered by Disqus.","tags":"2024 w5 課程整理","url":"./2024-Spring-w5-blog-tutorial.html"},{"title":"2024 w4 課程整理","text":"有關 gitpod, Replit, 不同網頁編輯, LaTeX, 整理資料 使用gitpod來維護倉儲 gitpod動態編輯網頁 使用gitpod來維護倉儲，並獲得權限(.ssh-keygen)。 在使用gitpod上傳時會需要先授權與github的合併存取權，否則會無法上傳。 備註：因為gitpod它只有每個月50小時的限量，所以使用完需回到gitpod網頁將執行中的倉儲stop， Replit靜態網站檢視 需下載 main2.txt 和 static.txt 取得裡面的main2.py和static.py，將兩個檔案加入至replit編輯(Files)，之後在 Shell 執行 python3 main2.py 就可以執行倉儲內的靜態網站檢視，要取消執行只要在Shell頁面按下Ctrl+C就可以了。 Replit分組網站建立權限 由於Replit只允許一個倉儲帳號對應，所以分組網站的每個人都需要自行在 /home/runner/.ssh 目錄下建立 id_rsa 與 config 備註：建議還是使用Gitpod來進行.ssh-keygen，因為replit時常改版 也會以授權等方式來拖延時時間來刪除你的.ssh。 replit Codespaces Gitpod 三種網頁編輯執行動態和靜態網站和維護，編輯個人網站的方式不只一種，除了上述三種，能編輯個人網站內容，如：近端維護也是一種，所以當其中一個不能使用時，我們還有另外幾種的維護方式，這變向說明了，在每個人選擇的道路可以有很多種。 LaTeX 期中與期末時需要利用其建立各組的報告 所以需先下載 miktex-portable.7z 利用分組倉儲整理資料 https://github.com/git-guides https://git-scm.com/book/zh-tw/v2 https://git-scm.com/book/zh/v2 A Tutorial for GitHub.pdf github學習資源 以上等資料統整至 分組倉儲網站 。 Please enable JavaScript to view the comments powered by Disqus.","tags":"2024 w4 課程整理","url":"./2024-Spring-w4-blog-tutorial.html"},{"title":"2024 w3 課程整理","text":"有關 wink, git指令, 子模組 wink建立 可以至官方網站 下載 需要的版本。 或直接下載這個 安裝檔 。 git常用指令 git add . (新增) git commit -m \"內容\" (提交及名稱) git push (推送) git version (查詢目前所使用的 git 版本) git status (一般是用來檢查目前近端改版情況) 若在遠端倉儲已經改版了，就必須先git pull，將遠端資訊與自己的合併更新，才能在提交新的版本推送至倉儲。 git pull=git fetch + git merge git fetch (將遠端主機的最新內容拉到本地)，git merge (用於從指定的commit合併到當前分支) git submodule add 自己倉儲網址.git+學號 (新增分組倉儲的子模組) 如果只要取下倉儲主要內容，可以使用git clone (取一個git倉儲)克隆一份git倉儲，可能該子模組還有其他子模組，就必須加上--recurse-submodules git clone --recurse-submodules (.git 指定目錄與否) 以下為自己收錄使用指令(可能有非git指令) git submodule update --init (抓下子模組) git log (檢視 Git 紀錄 Q鍵離開) ls -l (瀏覽) pwd (列出現在工作目錄) acp (\"輸入\" 直接上傳) dns (將英文名稱轉為數字IP 問server(伺服器)IP地址 DNS會先查詢自己資料庫) dir (顯示某個磁碟指定目錄下的全部或部分檔案目錄和子目錄) 在分組網站建立子模組 主要還是參照導師的 這個影片 和 網頁 來完成的。 整理了導師在影片中應用到的指令： git status ls -l clear git submodule add 自己倉儲網址.git空格+學號 git add . git commit -m \"add 學號 submodule\" git push 以上指令。 操作部分是在github的Codespaces上執行，目的是在分組倉儲建立個人子模組。 Please enable JavaScript to view the comments powered by Disqus.","tags":"2024 w3 課程整理","url":"./2024-Spring-w3-blog-tutorial.html"},{"title":"2024 w2 課程整理","text":"有關 Disqus, ckmsc39th, Codespaces Disqus 以導師網站裡這個頁面給的 範例 想試試以這個 參考影片 為基底，製作出一個屬於自網站的Q&A留言系統 最終希望能完成向導師這個頁面一樣的系統 https://mde.tw/wcm2024/content/Q&A.html ckmsc39th 在看了下方倉儲連結的貢獻者名單，除了可以看到各用戶的提交次數與每次提交內容外。 https://github.com/ckmsc39th/ckmsc39th.github.io/graphs/contributors 個人在觀看分析後覺得，可以從這個網站頁面還能得知： (!)各成員提交的時間點及提交統計圖。 (2)各成員在當月當日，每天上傳修改資料曲線圖。 (3)得知從2/12到6/13這段期間是各成員有push的時間段。 (4)同(3)也得知每位成員在各時間段上傳次數多寡。 (5)也能統計全員的上傳次數並統計排名。 Codespaces 在繼使用replit 近端 遠端，編輯維護網站後，為新的維護能維護網站的方法。 優缺點總結幾點： 1.可以跳過近端反鎖部驟，直接開啟動態網站編輯。 2.幾乎與replit的操作系統一樣。(和其最近更新的動態網站連結亂碼) 3.受限於這個只是給你試用的，所以有每個月的使用時數上限。 以下連結為使用Codespaces編輯維護晚站後的靜態連結： https://zhe41223118.github.io/wcm2024/ Please enable JavaScript to view the comments powered by Disqus.","tags":"2024 w2 課程整理","url":"./2024-Spring-w2-blog-tutorial.html"},{"title":"2024 w1 課程整理","text":"登錄github,建立個人網站 建立Github帳號 點擊 這裡 或網上搜尋Github並在登錄後找到Sign up可用來建立課程倉儲與網站 如何建立個人網站 請至 這個網站 以此倉儲作為模板，建立個人名稱為 wcm2024 的倉儲，並在至 Github Pages 設定個人的課程網頁網址 Please enable JavaScript to view the comments powered by Disqus.","tags":"w1","url":"./2024-Spring-w0-blog-tutorial.html"},{"title":"2024 Spring 課程","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統2 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./2024-Spring-w1-blog-tutorial.html"}]};