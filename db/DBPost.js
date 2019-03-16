

class DBPost {
    constructor(postId) {
        this.storageKeyName = 'liveList';
        this.postId = postId;
    }

    //获取指定id号的文章数据
    getPostItemById() {
        var postsData = this.getAllPostData();
        var len = postsData.length;
        for (var i = 0; i < len; i++) {
            if (postsData[i].postId == this.postId) {
                return {
                    index: i,
                    data: postsData[i]
                }
            }
        }
    }

   

    /*得到全部文章信息*/
    getAllPostData() {
        var res = wx.getStorageSync(this.storageKeyName);
        if (!res) {
            res = require('../data/liveData.js').liveList;
        }
        return res;
    }

    /*初始化缓存数据*/
    execSetStorageSync(data) {
        wx.setStorageSync(this.storageKeyName, data);
    }

  
};

export { DBPost }