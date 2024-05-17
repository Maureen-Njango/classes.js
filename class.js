     
     3. //**Employee Management System**: Design an `Employee` class with properties like `name`, `id`, `position`, and methods like `updateDetails()`, `calculateSalary()`.
     //This can be used to manage employee information and perform operations like updating details and calculating salary.
    
    
    
    
    class Employee {
        constructor(name, id, position) {
            this.name = name;
            this.id = id;
            this.position = position;
        }
    
        updateDetails(newName, newId, newPosition) {
            this.name = newName;
            this.id = newId;
            this.position = newPosition;
        }
    
        calculateSalary() {
            
        }
    }
    
    let employee1 = new Employee("Flora ngendo", 12345, "Manager");
    
    
    employee1.updateDetails("Mbira Morin", 54321, "Senior Developer");
    
    
    employee1.calculateSalary();
    console.log(employee1)
    //Social Media Profile**: Create a `UserProfile` class with properties like `username`, `bio`, `followers`, `following`, and methods like `updateBio()`, `
    //followUser()`, `unfollowUser()`. This can model a user's profile and interactions on a social media platform
    
    
    
        class UserProfile {
            constructor(username, bio, followers, following) {
                this.username = username;
                this.bio = bio;
                this.followers = followers;
                this.following = following;
            }
        
            updateBio(newBio) {
                this.bio = newBio;
            }
        
            followUser(userToFollow) {
                userToFollow.followers++;
                this.following++;
            }
        
            unfollowUser(userToUnfollow) {
                userToUnfollow.followers--;
                this.following--;
            }
        }
        
        
        let user1 = new UserProfile("Maureen", "Audi luxury", 100, 50);
        let user2 = new UserProfile("Mbira", "Amaizing lifestyle", 50, 100);
        
        console.log(user1);
        console.log(user2);
        
        user1.updateBio("New bio for user1");
        user1.followUser(user2);
        user2.unfollowUser(user1);
        
        console.log(user1);
        console.log(user2);