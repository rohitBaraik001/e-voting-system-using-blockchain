// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
contract Evote{
    uint public candidatesCount=0;
    uint public userCount=0;
    string public changeState="";
 mapping(uint => candidates) public candidatesList;
 mapping(string => email) public emailList;
 mapping(string => aadhar) public aadharList;
 mapping(string => user) public usersList;

 struct user{
      string username;
      string email;
      string password;
      bool isVoted;
      string aadhar;
      
  }
 struct email{
      string accountAddress;
      string aadhar;
  }
 struct aadhar{
      string accountAddress;
      string email;
  }
 
  struct candidates{
      uint id;
      string name;
      string age;
      string party;
      string qualification;
      uint voteCount;
  }

  // events

   event userCreated(
      string username,
      string email,
      string password,
      bool isVoted,
      string aadhar
      
    );

   event emailCreated(
      string accountAddress,
      string aadhar
    );
   event aadharCreated(
      string accountAddress,
      string email
    );
   event candidatesCreated(
      uint id,
      string name,
      string age,
      string party,
      string qualification,
      uint voteCount
    );

   
    function createUser(string memory _username,string memory _email,string memory _password,string memory _aadhar ) public {
      
        userCount++;

        usersList[_email] = user(_username,_email,_password,false,_aadhar);
      
        emit userCreated(_username,_email,_password,false,_aadhar);
    }

  function createCandidate(string memory _name,string memory _age,string memory _party,string memory _qualification) public {
      
        candidatesCount++;
       
        candidatesList[candidatesCount] = candidates(candidatesCount,_name,_age,_party,_qualification,0);
      
        emit candidatesCreated(candidatesCount,_name,_age,_party,_qualification,0);
    }
  function addVote(uint id,string memory _email) public {
        
        candidatesList[id].voteCount++;
        usersList[_email].isVoted=true;
      
    }
  function changeStates(string memory _name) public {

        changeState=_name;
    }

    function appendIsVote(string memory _email) public {

         usersList[_email].isVoted=true;
    }

  function createAdharEmail(string memory _aadharNum, string memory _accountAddress,string memory _email) public {
        aadharList[_aadharNum] = aadhar(_accountAddress,_email);

        usersList[_email].aadhar=_aadharNum;

        emit aadharCreated(_accountAddress, _email);
  }
  

}