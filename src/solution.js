var text = $('input #note-form').val()
var list = $('#comments-list')
var li = '<li>' + text + '</li>'
var search = $('input #search-form').val()


function addToList(){
$('#note-form').on('submit' () => {
  list.append(li)
})

function searchList(){
  $('#search-form').on('submit', () => {
    list.map( () => {
      return $('#comments-list li:contains(`${search}`)')
  })
)

$(document).ready(function(){

  addToList()
  searchList()

})
