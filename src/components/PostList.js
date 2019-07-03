import React, { Component } from 'react';

import Post from './Post';
class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Diego Fernandes',
          avatar:
            'https://www.jornalconexao.com.br/wp-content/uploads/2019/06/dollify-foto-avatar.jpg'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar:
                'https://www.jornalconexao.com.br/wp-content/uploads/2019/06/dollify-foto-avatar.jpg'
            },
            content: 'Conteúdo do comentário'
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Diego Fernandes',
          avatar:
            'https://www.jornalconexao.com.br/wp-content/uploads/2019/06/dollify-foto-avatar.jpg'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar:
                'https://www.jornalconexao.com.br/wp-content/uploads/2019/06/dollify-foto-avatar.jpg'
            },
            content: 'Conteúdo do comentário'
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postList">
        {posts.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
