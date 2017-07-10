class CommentList {
  constructor(arrayOfStrings){
    this.comments = []
    arr = arrayOfStrings
    arr.forEach(cmt => {
      this.comments.push(cmt)
    })
  }

  renderComments(){
    return this.comments.map( cmt => cmt.render())
  }

  render(){
    return `<ul> ${this.renderComments()} </ul>`
  }

  addComment(text){
    const cmt = new Comment(text)
    this.comments.push(cmt)
  }


}
