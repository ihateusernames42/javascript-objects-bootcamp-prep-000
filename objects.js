var playlist = {Artist: "song name"}
function updatePlaylist(playlist,artist,song){
  return object.asign({}, playlist, {[artist]:song})
}
function removeFromPlaylist(playlist, artist){
  delete playlist.artist
}