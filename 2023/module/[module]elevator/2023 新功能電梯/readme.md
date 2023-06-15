# 此為禮包電梯的說明文件 ver 3.3
更新紀錄：
Ver 3.3 在sp-elevator.js離線用電梯中新增切換mobile / app連結的功能。禮包中data-elevator.js原本物件內的屬性：「linkUrl」要改成「mobileLink」，並新增屬性：「appLink」讓程式判斷切換。若沒填appLink會自動以mobileLink取代。
Ver 3.2 修改了判斷順序，在一開始時間不在設定範圍內就直接給予local右電梯。移除先fetch再判斷，避免不使用時，上一次設定的主視覺頁面年代過於久遠而被後端清掉，導致先fetch再判斷的fetch找不到data-main-elevator.json而報錯停止JS執行。
Ver 3.1 新增了在一開始判斷是離線打開、或是非ETmall網站（給Her森森的），就直接給予local右電梯
ver 3.0 自動電梯，代號：rapunzel，自動將電梯內連結之網頁掛上指定頁面（主活動）電梯，接著運作黑白名單功能
目前功能均向下相容（表示3.1將包含2.0與1.0的功能，且原始頁面不需改動就能套用最新版本）
ver 2.0 灰姑娘電梯，代號：cinderella，只有黑 / 白名單上的網頁不掛上 / 掛上指定頁面（主活動）電梯
ver 1.0 霸道電梯，會針對所有符合日期內的網頁掛上指定頁面（主活動）電梯

# 內容
1. develop資料夾內為一大禮包，其index.html內接上了離線的電梯
2. develop > test-check 為測試與開發用的禮包電梯
3. develop > test-main 為測試與開發用的主視覺電梯，用以放置在主活動的layout > nav資料夾內供閱讀
4. product > check 供上線的禮包電梯（不包含測試主視覺），為將develop的check-elevator.js、sp-elevator.js壓縮過的版本
5. product > main 供線上的主視覺電梯（不包含測試主視覺），為將develop的main-elevator.js壓縮過的版本，用以放置在主活動的assets > currect > nav資料夾
6. 3.0版開始無論主視覺電梯還是禮包電梯都使用fetch api + .json檔案，離線點開會自動給local電梯
7. 呈上，要使用live server或是打包軟體如webpack的local伺服器並且註解掉check-elevator.js第51行判斷才能正確開啟
8. 代號為防cache用，在正式版本上線後若遇到cache可以請上線的script後使用「?代號」的方式解cache。注意代號只有一個因此請確定版本無誤後再使用，確定前請使用時間戳代替。
9. 開發資料（develop內檔案）有4處與正式不同，若是正式資料要改動才能以離線server開啟：
  a. 開發的check-elevator.js第51行判斷isOffline和isEtmall要註解掉（可搜尋TODO），**正式上線要關閉註解、打開判斷式**
  b. 開發的data-check-elevator.js內的結束時間會是2099年
  c. 開發的data-check-elevator.js內mode必須是白名單（因要填入測試網址）
  d. 開發的data-check-elevator.js內的dataUrl陣列內要有測試網址（如：'http://127.0.0.1:5500/'）

10. 也可以將測試用的電梯資料（test-main/data-main-elevator.json）內任一電梯網址填入測試網址（如：'http://127.0.0.1:5500/index.html'），則上述10-c.與10-d.可不用修改成測試用內容，亦能用離線server開啟

# 線上位置
決定將測試從禮包註解的部分移除，讓線上測試網址只留在這（因為在測試線上是未壓縮的code，會被看到邏輯）

[正式位置]: https://media.etmall.com.tw/sp/11911/check-elevator.js
正式位置的check-elevator.js使用壓縮過的檔案，不含console.log與isTest資料（console.error會保留）

[測試位置]: https://media.etmall.com.tw/sp/14841/check-elevator.js
測試位置的check-elevator.js使用非壓縮原始檔，打開console.log方便測試，因此盡量不要曝光

注意script標籤必須帶上id: **checkElevator**，
如：<script id="checkElevator" src="https://media.etmall.com.tw/sp/11911/check-elevator.js"></script>
