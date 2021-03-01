


function gotoRegister(){
    window.location.href='../html/login.html';
}

function signIn(){
    const signPass = document.getElementById('loginPassword').value;
    const signEmail = document.getElementById('loginEmail').value;
    const data = {
        email: signEmail,
        password: signPass
    }
    console.log(JSON.stringify(data));
    fetch('http://127.0.0.1:5000/api/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data => {
        if(data.status == 401 ) {
            return alert("Wrong credentials");
        }
        console.log('Success: ',data);
        localStorage.setItem('token', data.token)
        
        const token = localStorage.getItem('token');
        const dat = JSON.parse(atob(token.split('.')[1]));
        console.log(dat);
        if (dat.user.user_type === 'user'){
            window.location.href = '../html/guard.html';
        }else{
            window.location.href = '../html/admin.html';
        }
    })
    .catch((error) => {
        console.error('Error: ', error);
    });
}

function logoutButton(){
    localStorage.removeItem('token');
}

function addUser(){
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;
    const password = document.getElementById('password').value;
    const userType = document.getElementById('userType').value;

    const data = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: tel,
        email: email,
        password: password,
        userType: userType
    }

    fetch('http://127.0.0.1:5000/api/adduser', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data => {
        console.log('Success: ',data);
        window.location.href='../html/admin.html'
    })
    .catch((error) => {
        console.error('Error: ', error);
    });

}

function addGuard() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const nId = document.getElementById('nId').value;
    const tel = document.getElementById('tel').value;

    const data = {
        firstName: firstName,
        lastName: lastName,
        nId: nId,
        telephone: tel
    }

    fetch('http://127.0.0.1:5000/api/guard', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data => {
        console.log('Success: ',data);
        window.location.href='../html/guard.html';
    })
    .catch((error) => {
        console.error('Error: ', error);
    });

}

function showData() {
    $("table > tbody > tr").each(function () {
        var $tr = $(this);
        if ($tr.find(".checkBoxClass").is(":checked")) {
          var $td = $tr.find("td");
          console.log($td.eq(1).text() + " " + $td.eq(2).text());
        }
    });
}

function deleteGuard() {
    const button = document.getElementById('deleteButton');
    const dataDelete = button.getAttribute('data-delete');
    fetch('http://127.0.0.1:5000/api/guard?' + new URLSearchParams({nid: dataDelete}), {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        window.location.href = '../html/guard.html';
    })
}

function addWeekPlan(){
    const date = document.getElementById('date').value;
    const day = document.getElementById('day').value;
    const weekNo = document.getElementById('weekNo').value;
    const month = document.getElementById('month').value;
    const team = document.getElementById('team').value;
    const teamLeader = document.getElementById('teamLeader').value;

    const data = {
        date: date,
        day: day,
        weekNo: weekNo,
        month: month,
        team: team,
        teamLeader: teamLeader
    }
    console.log(data);
    fetch('http://127.0.0.1:5000/api/weekplan', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data => {
        console.log('Success: ',data);
        window.location.href="../html/weekplan.html";
    })
    .catch((error) => {
        console.error('Error: ', error);
    });

}
// Change password
function changePassword() {
    const token = localStorage.getItem('token');
    const data = JSON.parse(atob(token.split('.')[1]));
    const userId = data.user.user_id;
    const password = document.getElementById('newPassword').value;
    const changePasswordData = {
        password
    }
    fetch('http://127.0.0.1:5000/api/password?' + new URLSearchParams({nid: userId}), {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(changePasswordData),
    })
    .then(res => res.json())
    .then(data => {
        console.log('Success: ', data);
        alert('Password is successfully changed');
    })
    .catch((error) => {
        console.error('Error: ', error);
    });
}

function deleteUser(){
    const button = document.getElementById('deleteButtonUser');
    const dataDelete = button.getAttribute('data-d');
    console.log(dataDelete)
    fetch('http://127.0.0.1:5000/api/user?' + new URLSearchParams({id: dataDelete}), {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        window.location.href = '../html/admin.html';
    })
}

function createReport(){
    const reportNo = document.getElementById('reportNo').value;
    const date = document.getElementById('date').value;
    const feesCollected = document.getElementById('feesCollected').value;
    const usedFees = document.getElementById('usedFees').value;
    const reciepientEmail = document.getElementById('reciepientEmail').value;

    const data = {
        reportNo,
        date,
        feesCollected,
        usedFees,
        reciepientEmail
    }

    console.log(data);
    fetch('http://127.0.0.1:5000/api/report', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data => {
        console.log('Success: ',data);
        window.location.href="../html/createReport.html";
    })
    .catch((error) => {
        console.error('Error: ', error);
    });

}