var playlist = {Artist: "song name"}
function updatePlaylist(playlist, artist, songTitle){
  return playlist.assign({}, playlist, {[artist]:songTitle})
}
function removeFromPlaylist(playlist, artist){
  delete playlist.artist
}