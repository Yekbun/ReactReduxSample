import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchMovies,deleteMovie } from '../../actions/movies';
import MoviesListPage from '../MoviesListPage';

class MoviesPage extends Component {
	static propTypes = {
		movies: PropTypes.object.isRequired,
		deleteMovie : PropTypes.func.isRequired
	};

	componentDidMount() {
		this.props.fetchMovies();
	}

	render() {
		return (
			<div>
				<h2>Movies Page</h2>
				<MoviesListPage 
				movies={this.props.movies}
				deleteMovie={this.props.deleteMovie}/>
			</div>
		);
	}
}

const mapStateToProps = ({ movies }) => {
	return {
		movies
	}
};

const mapDispatchToProps = {
	fetchMovies, 
	deleteMovie
};

export default connect(mapStateToProps,mapDispatchToProps)(MoviesPage);