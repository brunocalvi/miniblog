import styles from './Search.module.css';

import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useQuery } from '../../hooks/useQuery';

import PostDetail from '../../components/PostDetail';

import { Link } from 'react-router-dom';

const Search = () => {
  const quey = useQuery();
  const search = quey.get('q');

  const { documents: posts } = useFetchDocuments('posts', search);

  return (
    <div className={styles.search_container}>
      <h2>Search</h2>
      <div>
        { posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts a partir da sua busca ...</p>
            <Link to='/' className='btn btn-dark'>Voltar</Link>
          </div>
        )}

        { posts && posts.map((post) => (
          <PostDetail key={post.id} post={post}></PostDetail>  
        ))}
      </div>
    </div>
  )
}

export default Search