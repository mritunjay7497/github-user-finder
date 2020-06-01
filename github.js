class Github {
    constructor() {
        this.client_id = '*************************';
        this.client_secret = '***********************************************';
        this.repo_count = 10;;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        //Fetch user profile
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        //Fetch User repos
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repos = await repoResponse.json();


        return{
            profile,
            repos
        }
    }
}
