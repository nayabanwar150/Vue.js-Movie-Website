Vue.component('top-rated', {
    props: ['movie'],

    template: `
    <div>
    <div class="movie-header">
        <img :src="'https://image.tmdb.org/t/p/w220_and_h330_face'+movie.poster_path" class="poster-img">
    </div>
    <div class="movie-content">
        <div class="movie-content-header">
            <h3 class="movie-title">{{movie.title}}</h3>
        </div>
        <div class="movie-info">
            <div class="info-section">
                <label>Released</label>
                <span>{{movie.release_date}}</span>
            </div>
            <div class="info-section">
                <label>Language</label>
                <span>{{movie.original_language}}</span>
            </div>
            <div class="info-section">
                <label>Rating</label>
                <span>{{movie.vote_average}}</span>
            </div>
        </div>
    </div>
</div>
`
});

Vue.component('upcoming-movies', {
    props: ['upcoming'],

    template: `
    <div>
    <div class="movie-header">
        <img :src="'https://image.tmdb.org/t/p/w220_and_h330_face'+upcoming.poster_path" class="poster-img">
    </div>
    <div class="movie-content">
        <div class="movie-content-header">
            <h3 class="movie-title">{{upcoming.title}}</h3>
        </div>
        <div class="movie-info">
            <div class="info-section">
                <label>Released on</label>
                <span>{{upcoming.release_date}}</span>
            </div>
            <div class="info-section">
                <label>Language</label>
                <span>{{upcoming.original_language}}</span>
            </div>
            <div class="info-section">
                <label>Rating</label>
                <span>{{upcoming.vote_average}}</span>
            </div>
        </div>
    </div>
</div>
`
});

new Vue({
    el: '#app',
    data() {
        return {
            movieList: [],
            upcomingList: []
        }
    },
    mounted() {
        this.getUrls();
    },
    methods: {
        getUrls() {
            axios.all([
                this.request_1(),
                this.request_2()
            ])
                .then(axios.spread((first_response, second_response) => {
                    this.movieList = first_response.data.results
                    this.upcomingList = second_response.data.results
                }))
        },
        request_1() {
            return axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=c40ebed5a64f53434a86b65a243811c5&language=en-US&page=1')
        },
        request_2() {
            return axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=c40ebed5a64f53434a86b65a243811c5&language=en-US&page=1')
        }
    }
});