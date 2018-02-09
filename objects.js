var playlist = {Artist: "song name"}
function updatePlaylist(playlist,artist,song){
  return object.assign({}, playlist, {[artist]:song})
}
function removeFromPlaylist(playlist, artist){
  delete playlist.artist
}