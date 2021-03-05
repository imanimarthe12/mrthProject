


function gotoRegister(){
    window.location.href='../html/login.html';
}

function signIn(){
    const signPass = document.getElementById('loginPassword').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const data = {
        phoneNumber: phoneNumber,
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
        if (dat.user.usertype === 'admin'){
            window.location.href = '../html/viewReportsAdmin.html';
        }else if(dat.user.usertype === 'commander'){
            window.location.href = '../html/viewReportsCommander.html';
        }else{
            window.location.href = '../html/viewReportsCollector.html';
        }
    })
    .catch((error) => {
        console.error('Error: ', error);
    });
}

function logoutButton(){
    localStorage.removeItem('token');
}

function addSector(){
    const sector = document.getElementById('sector').value;

    const data = {
        sectorName: sector,
    }

    fetch('http://127.0.0.1:5000/api/sector', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data => {
        console.log('Success: ',data);
        alert('Sector Added')
    })
    .catch((error) => {
        console.error('Error: ', error);
    });

}

function addCell(){
    const cell = document.getElementById('cell').value;

    const data = {
        cellName: cell,
    }

    fetch('http://127.0.0.1:5000/api/cell', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data => {
        console.log('Success: ',data);
        alert('Cell Added')
    })
    .catch((error) => {
        console.error('Error: ', error);
    });

}

function addVillage(){
    const village = document.getElementById('village').value;

    const data = {
        villageName: village,
    }

    fetch('http://127.0.0.1:5000/api/village', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data => {
        console.log('Success: ',data);
        alert('Village Added')
    })
    .catch((error) => {
        console.error('Error: ', error);
    });

}



function actAddStaff() {
    const staffNames = document.getElementById('staffNames').value;
    const PhoneNumber = document.getElementById('staffPhoneNumber').value;
    const Position = document.getElementById('position').value;
    const password = document.getElementById('staffPassword').value;

    const data = {
        StaffName: staffNames,
        PhoneNumber: PhoneNumber,
        Position: Position,
        password: password
    }

    fetch('http://127.0.0.1:5000/api/staff', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data => {
        alert(data.message)
        window.location.href='../html/staff.html';
    })
    .catch((error) => {
        console.error('Error: ', error);
    });

}

function actAddCitizen() {
    const citizenNames = document.getElementById('citizenNames').value;
    const idCard = document.getElementById('idCard').value;
    const phoneNumber = document.getElementById('citizenPhoneNumber').value;

    const data = {
        citizenName: citizenNames,
        idCard: idCard,
        phoneNumber: phoneNumber,
    }

    fetch('http://127.0.0.1:5000/api/citizen', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data => {
        alert(data.message)
        window.location.href='../html/viewCitizen.html';
    })
    .catch((error) => {
        console.error('Error: ', error);
    });

}

function actAddPayment() {
    const datePayment = document.getElementById('datePayment').value;
    const paidAmount = document.getElementById('amountPaid').value;
    const paidMonth = document.getElementById('monthPaid').value;

    const data = {
        datePayment: datePayment,
        paidAmount: paidAmount,
        paidMonth: paidMonth,
    }

    fetch('http://127.0.0.1:5000/api/payment', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data => {
        alert(data.message)
        window.location.href='../html/viewPayment.html';
    })
    .catch((error) => {
        console.error('Error: ', error);
    });

}

function actAddIncident() {
    const date = document.getElementById('date').value;
    const incidentDescription = document.getElementById('incidentDescription').value;
    const wayForward = document.getElementById('wayForward').value;

    const data = {
        date: date,
        incidentDescription: incidentDescription,
        wayForward: wayForward,
    }

    fetch('http://127.0.0.1:5000/api/incident', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data => {
        alert(data.message)
        window.location.href='../html/viewIncident.html';
    })
    .catch((error) => {
        console.error('Error: ', error);
    });

}

function actAddGuard() {
    const guardName = document.getElementById('guardName').value;
    const idCard = document.getElementById('idCard').value;
    const team = document.getElementById('team').value;

    const data = {
        guardName: guardName,
        idCard: idCard,
        team: team,
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
        alert(data.message)
        window.location.href='../html/viewPatrol.html';
    })
    .catch((error) => {
        console.error('Error: ', error);
    });

}

function actAddDailyReport(){
    const date = document.getElementById('date').value;
    const day = document.getElementById('day').value;
    const week = document.getElementById('week').value;
    const month = document.getElementById('month').value;
    const team = document.getElementById('team').value;

    const data = {
        date: date,
        day: day,
        week: week,
        month: month,
        team: team,
    }
    console.log(data);
    fetch('http://127.0.0.1:5000/api/daily', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data => {
        console.log('Success: ',data);
        window.location.href="../html/viewPatrol.html";
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
        password: password
    }
    fetch('http://127.0.0.1:5000/api/password?' + new URLSearchParams({userid: userId}), {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(changePasswordData),
    })
    .then(res => res.json())
    .then(data => {
        alert(data.message);
        window.location.href = '../html/login.html';
    })
    .catch((error) => {
        console.error('Error: ', error);
    });
}

const addGuard = () => {
    window.location.href='../html/addGuard.html';
}
const addStaff = () => {
    window.location.href='../html/addStaff.html';
}
const addPlaces = () => {
    window.location.href='../html/addPlaces.html';
}
const addCitizen = () => {
    window.location.href='../html/addCitizen.html';
}
const addPayment = () => {
    window.location.href='../html/addPayment.html';
}
const addIncident = () => {
    window.location.href='../html/addIncident.html';
}
const addDaily = () => {
    window.location.href='../html/addPatrolReport.html';
}


$("#btnPrintCitizen").live("click", function () {
    var divContents = $("#citizenReport").html();
    var printWindow = window.open('', '', 'height=400,width=800');
    printWindow.document.write(`
                                <html>
                                    <head>
                                        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
                                        <link rel="stylesheet" href="../css/style.css">    
                                    `);
    printWindow.document.write('</head><body ><h1 style="padding-top: 100px; padding-bottom: 50px">Citizen Report</h1><style>#pdf{color: #000;}</style>');
    printWindow.document.write(divContents);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
});

$("#btnIncidentPrint").live("click", function () {
    var divContents = $("#incidentReport").html();
    var printWindow = window.open('', '', 'height=400,width=800');
    printWindow.document.write(`
                                <html>
                                    <head>
                                        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
                                        <link rel="stylesheet" href="../css/style.css">    
                        `);
    printWindow.document.write('</head><body><h1 style="padding-top: 100px; padding-bottom: 50px">Incident Report</h1><style>#pdf{color: #000;}</style>');
    printWindow.document.write(divContents);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
});

$("#btnPrintPayment").live("click", function () {
    var divContents = $("#paymentReport").html();
    var printWindow = window.open('', '', 'height=400,width=800');
    printWindow.document.write(`
                                <html>
                                    <head>
                                        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
                                        <link rel="stylesheet" href="../css/style.css">    
                        `);
    printWindow.document.write(`</head><body><h1 style="padding-top: 100px; padding-bottom: 50px">Payment Report</h1><style>#pdf{color: #000;}</style>`);
    printWindow.document.write(divContents);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
});

$("#btnPrintMonth").live("click", function () {
    var divContents = $("#monthlyReport").html();
    var printWindow = window.open('', '', 'height=400,width=800');
    printWindow.document.write(`
                                <html>
                                    <head>
                                        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
                                        <link rel="stylesheet" href="../css/style.css">    
                        `);
    printWindow.document.write(`</head><body><h1 style="padding-top: 100px; padding-bottom: 50px">Monthly Report</h1><style>#pdf{color: #000;}</style>`);
    printWindow.document.write(divContents);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
});

$("#btnPrintWeek").live("click", function () {
    var divContents = $("#weeklyReport").html();
    var printWindow = window.open('', '', 'height=400,width=800');
    printWindow.document.write(`
                                <html>
                                    <head>
                                        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
                                        <link rel="stylesheet" href="../css/style.css">    
                        `);
    printWindow.document.write(`</head><body><h1 style="padding-top: 100px; padding-bottom: 50px">Weekly Report</h1><style>#pdf{color: #000;}</style>`);
    printWindow.document.write(divContents);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
});
