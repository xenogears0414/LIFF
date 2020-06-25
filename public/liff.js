window.onload = function (e) {
    // init �ŏ������B��{�����擾�B
    // https://developers.line.me/ja/reference/liff/#initialize-liff-app
    liff.init(function (data) {
        getProfile();
        initializeApp(data);
    });
};

// �v���t�@�C���̎擾�ƕ\��
function getProfile(){
    // https://developers.line.me/ja/reference/liff/#liffgetprofile()
    liff.getProfile().then(function (profile) {
        document.getElementById('useridprofilefield').textContent = profile.userId;
        document.getElementById('displaynamefield').textContent = profile.displayName;

        var profilePictureDiv = document.getElementById('profilepicturediv');
        if (profilePictureDiv.firstElementChild) {
            profilePictureDiv.removeChild(profilePictureDiv.firstElementChild);
        }
        var img = document.createElement('img');
        img.src = profile.pictureUrl;
        img.alt = "Profile Picture";
        img.width = 200;
        profilePictureDiv.appendChild(img);

        document.getElementById('statusmessagefield').textContent = profile.statusMessage;
    }).catch(function (error) {
        window.alert("Error getting profile: " + error);
    });
}

function initializeApp(data) {
    document.getElementById('languagefield').textContent = data.language;
    document.getElementById('viewtypefield').textContent = data.context.viewType;
    document.getElementById('useridfield').textContent = data.context.userId;
    document.getElementById('utouidfield').textContent = data.context.utouId;
    document.getElementById('roomidfield').textContent = data.context.roomId;
    document.getElementById('groupidfield').textContent = data.context.groupId;
}


$(document).ready(function()){
	$("#sendMessageButton").bind("click",function()){
	    liff.sendMessages([{
	        type: 'text',
	        text: "TOYOTA"
	    }, {
	        type: 'sticker',
	        packageId: '2',
	        stickerId: '144'
	    }]).then(function () {
	        window.alert("ダメ");
	    }).catch(function (error) {
	        window.alert("Error sending message: " + error);
	    });
	}

}

//document.getElementById('sendMessageButton').addEventListener('click', function () {
//    // https://developers.line.me/ja/reference/liff/#liffsendmessages()
//    liff.sendMessages([{
//        type: 'text',
//        text: "TOYOTA"
//    }, {
//        type: 'sticker',
//        packageId: '2',
//        stickerId: '144'
//    }]).then(function () {
//        window.alert("ダメ");
//    }).catch(function (error) {
//        window.alert("Error sending message: " + error);
//    });
//});