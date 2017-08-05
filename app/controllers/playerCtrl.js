MusApp.controller('PlayerCtrl', ['$scope', '$location', 'Auth', '$firebaseArray',
  function($scope, $location, Auth, $firebaseArray) {
    console.log('PlayerCtrl');
    var ref = new Firebase('https://musicon.firebaseio.com');
    var playersRef = new Firebase('https://musicon.firebaseio.com/players');
    var songsRef = new Firebase('https://musicon.firebaseio.com/songs');
    var groupsRef = new Firebase('http://musicon.firebaseio.com/groups');
    var groupPlayerRef = new Firebase('http://musicon.firebaseio.com/groupPlayer');
    var player = $firebaseArray(playersRef);
    var songs = $firebaseArray(songsRef);
    var groups = $firebaseArray(groupsRef);
    var groupPlayer = $firebaseArray(groupPlayerRef);
    this.user = Auth.$getAuth().uid;
    console.log("user", this.user);
    this.players = $firebaseArray(playersRef);
    this.songs = $firebaseArray(songsRef);
    this.groups = $firebaseArray(groupsRef);
    this.groupPlayer = $firebaseArray(groupPlayerRef);
    console.log("players array", this.players);
    console.log("song", this.songs);
    console.log("groups array",this.groups);
    console.log("groupPlayer array",this.groupPlayer);
    this.currentList = "A";

    //  songs.$loaded(function () {
    //   this.song = songs.$getRecord(this.user);
    //   console.log('songs', songs);
    // });

// ***** Song Functions *****
// 
    this.addSong = function() {
      console.log("addSong Function");
      console.log("currentList = ", this.currentList);
      if (!this.newSong.artist) {
        this.newSong.artist = null;
      }
      if (!this.newSong.composer) {
        this.newSong.composer = null;
      }
      if (!this.newSong.key) {
        this.newSong.key = null;
      }
      if (!this.newSong.leadVoc) {
        this.newSong.leadVoc = null;
      }
      if (!this.newSong.tempo) {
        this.newSong.tempo = null;
      }
      if (!this.newSong.status) {
        this.newSong.status = null;
      }
      if (!this.newSong.list) {
        this.newSong.list = "A";
      }
      songs.$add({
        uid: this.user,
        title: this.newSong.title,
        artist: this.newSong.artist,
        composer: this.newSong.composer,
        key: this.newSong.key,
        leadVoc: this.newSong.leadVoc,
        tempo: this.newSong.tempo,
        status: this.newSong.status,
        list: this.newSong.list
      });
      console.log('Added Song');
    };

      this.editSong = function(id) {
      console.log("editSong Function");
      if (!this.newSong.artist) {
        this.newSong.artist = null;
      }
      if (!this.newSong.composer) {
        this.newSong.composer = null;
      }
      if (!this.newSong.key) {
        this.newSong.key = null;
      }
      if (!this.newSong.leadVoc) {
        this.newSong.leadVoc = null;
      }
      if (!this.newSong.tempo) {
        this.newSong.tempo = null;
      }
      if (!this.newSong.status) {
        this.newSong.status = null;
      }
      if (!this.newSong.list) {
        this.newSong.list = "A";
      }
      songs.$add({
        uid: this.user,
        title: this.newSong.title,
        artist: this.newSong.artist,
        composer: this.newSong.composer,
        key: this.newSong.key,
        leadVoc: this.newSong.leadVoc,
        tempo: this.newSong.tempo,
        status: this.newSong.status,
        list: this.newSong.list
      });
      console.log('Added Song');
    };

     this.deleteSong = function(id) {
      console.log(id);
      var songRef = new Firebase('https://musicon.firebaseio.com/songs' + '/' + id);
      console.log("songRef", songRef);
      console.log("deleteSong function");
 
      songRef.remove();
      console.log("delete song function run");
    };

// ***** Group Functions *****

    this.addGroup = function() {
      console.log("addGroup Function");
      if (!this.newGroup.name) {
        this.newGroup.name = null;
      }

      groups.$add({
        name: this.newGroup.name
      });
      console.log('Added group');
    };

   this.editSong = function(id) {
      console.log("editGroup Function");
      if (!this.newGroup.name) {
        this.newGroup.name = null;
      }

      groups.$add({
        name: this.newGroup.name,
      });
      console.log('Added Group');
    };

     this.deleteGroup = function(id) {
      console.log(id);
      var groupRef = new Firebase('https://musicon.firebaseio.com/groups' + '/' + id);
      console.log("groupRef", groupRef);
      console.log("deleteGroup function");

      groupRef.remove();
      console.log("delete group function run");
    };

  }]);
