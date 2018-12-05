import React from 'react';
import {connect} from 'react-redux';
import NewMovieForm from '../NewMovieForm';
import {onNewMovieSubmit, fetchMovie,onUpdateMovieSubmit} from '../../actions/newMovie';

class NewMoviePage extends React.Component
{
    componentDidMount()
    {
        const {match}=this.props;
        //propstaki movienin elimizdeki moviden farkli olup olmadigi kontrolu

        if(! this.props.movie  && match.params._id){
            this.props.fetchMovie(match.params._id);
        }
    }
        render(){
        return(
            <div>
                <h2> New Movie Form</h2>   
                <NewMovieForm 
                    movie={this.props.movie}
                    newMovie={this.props.newMovie}
                    onNewMovieSubmit={this.props.onNewMovieSubmit}  
                    onUpdateMovieSubmit={this.props.onUpdateMovieSubmit}
                />              
            </div>
        );
    }
}

const mapStateToProps = ({ newMovie, movies }, props) => {
	return {
		newMovie,
		movie: movies.movieList.find(item => item._id === props.match.params._id)
	}
};

const mapDispacthToProps={
    onNewMovieSubmit,
    onUpdateMovieSubmit,
    fetchMovie
}
export default connect(mapStateToProps,mapDispacthToProps)(NewMoviePage)