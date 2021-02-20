import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customer =[ {
  'id': 1,
  'image': 'https://placeimg.com/100/100/1',
  'name': '홍길동',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생',
},
{
  'id': 2,
  'image': 'https://placeimg.com/100/100/2',
  'name': '손오공',
  'birthday': '961223',
  'gender': '남자',
  'job': '쇼맨',
},

{
  'id': 3,
  'image': 'https://placeimg.com/100/100/3',
  'name': '베트맨',
  'birthday': '961224',
  'gender': '남자',
  'job': '정의맨 ',
}
]
class App extends Component {
  render() {
    return (
      <div>
        {
          customer.map(c => {
            return(
              <Customer
                  key = {c.id}
                  id = {c.id}
                  image = {c.image}
                  name = {c.name}
                  birthday = {c.birthday}
                  gender = {c.gender}
                  job = {c.job}
      
              />
            );

          })
        }
      
      </div>
    )
  }
}

export default App;
