import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class Title extends Component{
//   handleClickOnTitle(word, e){
//     console.log(e.target.innerHTML)
//     console.log(this, word)
//   }
//   render(){
//     return(
//       <h1 onClick={this.handleClickOnTitle.bind(this, 'hello')}>React 小书</h1>
//     )
//   }
// }

// class Header extends Component{
//   render(){
//     const cName = 'head1'
//     return (
//       <div className={cName}>
//         <Title />
//         <h2>This is Header</h2>
//       </div>
//     )
//   }
// }

// class Main extends Component {
//   render () {
//     return (
//       <div>
//         <h2>This is main content</h2>
//       </div>
//     )
//   }
// }

// class Footer extends Component {
//   render () {
//     return (
//       <div>
//         <h2>This is footer</h2>
//       </div>
//     )
//   }
// }

// class Index extends Component {
//   render () {
//     return (
//       <div>
//         <Header />
//         <Main />
//         <Footer />
//       </div>
//     )
//   }
// }
class LikeButton extends Component{
  static defaultProps = {
    likeText: '点赞',
    unLikeText: '取消'
  }
  constructor(){
    super()
    this.state = { isLiked: false }
  }
  handleClickOnLikeButton(){
    this.setState({
      isLiked: !this.state.isLiked
    })
  }
  render(){
    const likeText = this.props.likeText
    const unLikeText = this.props.unLikeText
    return(
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked ? likeText : unLikeText}👍
      </button>
    )
  }
}

// class Index extends Component {
//   render () {
//     return (
//       <div>
//         <LikeButton likeText='赞' unLikeText='已赞'/>
//       </div>
//     )
//   }
// }

// 函数方式编写无状态组件
const Index = (props) => {
  const sayHi = (event) => console.log('hi')
  return(
    <div onClick={sayHi}>
      <LikeButton likeText='赞' unLikeText='已赞'/>
    </div>
  )
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
)