window.onload = function() {
var x = document.getElementById("chats").lastElementChild;
x.focus();
};

var createWorkspace = document.getElementById('createWorkspace');
var joinWorkspace = document.getElementById('joinWorkspace');
var createChannel = document.getElementById('createChannel');
var createWorkspaceModal = document.getElementById('createWorkspaceModal');
var joinWorkspaceModal = document.getElementById('joinWorkspaceModal');
var createChannelModal = document.getElementById('createChannelModal');
var blur = document.getElementById('blur');
var closeCreateWorkspace = document.getElementById('closeCreateWorkspace');
var closeJoinWorkspace = document.getElementById('closeJoinWorkspace');
var closeCreateChannel = document.getElementById('closeCreateChannel');

createWorkspace.addEventListener("click", function(){
    createWorkspaceModal.classList.toggle('createWorkspaceModalShow');
    blur.classList.toggle('bluractive');
});

createChannel.addEventListener("click", function(){
    createChannelModal.classList.toggle('createChannelModalShow');
    blur.classList.toggle('bluractive');
});

joinWorkspace.addEventListener("click", function(){
    joinWorkspaceModal.classList.toggle('joinWorkspaceModalShow');
    blur.classList.toggle('bluractive');
});

closeCreateWorkspace.addEventListener("click", function(){
    createWorkspaceModal.classList.toggle('createWorkspaceModalShow');
    blur.classList.toggle('bluractive');
});

closeJoinWorkspace.addEventListener("click", function(){
    joinWorkspaceModal.classList.toggle('joinWorkspaceModalShow');
    blur.classList.toggle('bluractive');
});

closeCreateChannel.addEventListener("click", function(){
    createChannelModal.classList.toggle('createChannelModalShow');
    blur.classList.toggle('bluractive');
});