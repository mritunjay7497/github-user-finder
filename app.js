//Init Github
const github = new Github;

//Init UI
const ui = new UI;

//Search Input
const searchUser = document.getElementById("searchUser");

//search inputs event listener
searchUser.addEventListener('keyup',(e) => {
    //Get input text
    const userText = e.target.value;

    if(userText !== ''){
        //make http call
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found'){
                    //Show Alert
                    ui.showAlert("User Not Found",'alert alert-danger');

                }else{
                    //Show Profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    }else{
        //clear profile
        ui.clearProfile();
    }
});