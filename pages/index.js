import Head from 'next/head';
import Container from '../components/Container';
import Users from '../components/Users';
import fetch from 'isomorphic-fetch';

const Index = (props) => {
  return (  
    <div>
      <Container>
        <Head>
          <title>NextJs Index</title>
        </Head>
        <h1>NextJS Home</h1>
        <Users users={props.users} />
      </Container>
    </div>
  )
}

Index.getInitialProps = async (ctx) => {
  const res = await fetch('https://reqres.in/api/users?page=2');
  const data = await res.json();
  console.log(data.data);
  return { users: data.data };
}

export default Index;