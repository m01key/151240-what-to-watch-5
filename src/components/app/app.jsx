import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from 'components/main/main';
import SignIn from 'components/sign-in/sign-in';
import MyList from 'components/my-list/my-list';
import Movie from 'components/movie/movie';
import Review from 'components/review/review';
import Player from 'components/player/player';


const App = (props) => {
  const {reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'
          render={({history}) => (
            <Main onMovieCardClick={(id) => history.push(`/films/${id}`)} />
          )}
        />
        <Route exact path='/login'>
          <SignIn />
        </Route>
        <Route exact path='/mylist'
          render={({history}) => (
            <MyList onMovieCardClick={(id) => history.push(`/films/${id}`)} />
          )}
        />
        <Route exact path='/films/:id'
          render={({history, match}) => (
            <Movie reviews={reviews} match={match}
              onMovieCardClick={(id) => history.push(`/films/${id}`)} />
          )}
        />
        <Route exact path='/films/:id/review'
          render={({match}) => (
            <Review match={match}/>
          )}
        />
        <Route exact path='/player/:id'>
          <Player />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired
};


export default App;
