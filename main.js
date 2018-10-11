
document.getElementById('issueInput').addEventListener('submit',saveIssue);
//saving the data to local storage to browser

function fetchIssues()
{
	var issues=JSON.parse(localStorage.getItem('issues'));
	var issuesList=document.getElementById('issuesList');
	issuesList.innerHTML='';
	for(var i=0; i<issues.length; i++)
	{
	var id=issues[i].id;
	var desc=issues[i].desc;
	var severity=issues[i].severity;
	var status=issues[i].status;
	var assignedTo=issues[i].assignedTo;
	
	issuesList.innerHTML +=  '<div class="well">'+
							  '<h6>ISSUE ID:' +id+'</h6>'+
							  '<p><span class="label label-info">' +status +'</span></p>'+
							  '<h3>' +desc+'</h3>'+
							  '<p><span class="glyphicon glyphicon-time"></span>'+ severity +'</p>'+
							  '<p><span class="glyphicon glyphicon-user"></span>'+ assignedTo +'</p>'+
							  '<a onclick="setStatusClosed()" href="#" class="btn btn-warning">Close</a>'+
							  '<a onclick="deleteIssue()" href="#" class="btn btn-warning>Delete</a>'+
							  



    }

}
function saveIssue(e)//e is an object of event handler
{
	var issueId=chance.guid();//GLOBALLY UNIQUE IDENTIFIER
	var description=document.getElementById('description').value;
	var severity=document.getElementById('severity').value;
	var assignedTo=document.getElementById('assignedTo').value;
	var issueStatus='open';

	var issue={
		id:issueId,
		desc:description,
		severity:severity,
		status:issueStatus,
		assignedTo:assignedTo
	}
	if(localStorage.getItem('issues') == NULL)
	{
		var issues=[];
		issues.push(issue);
		localStorage.setItem('issues',JSON.stringify('issues'));
	}
	else
	{
		var issues=JSON.parse(localStorage.getItem('issues'));
		issues.push(issue);
		localStorage.setItem('issues',JSON.stringify('issues'));
	}
	document.getElementById('issueInput').reset();
	fetchIssues();
	e.preventDefault();//prevent the default form from submitting
}

function setStatusClosed(id)
{
	var issues=JSON.parse(localStorage.getItem('issues'));
	for(var i=0;i<issues.length;i++)
	{
		if(issues[i].id==id)
			issues[i].status='closed';
	}
	localStorage.setItem('issues',JSON.stringify('issues'));
	fetchIsuues();
}
function deleteIssue(id)
{
	var issues=JSON.parse(localStorage.getItem('issues'));
	for(var i=0;i<issues.length;i++)
	{
		if(issues[i].id==id)
			issues.splice(i,1);
	}
	localStorage.setItem('issues',JSON.stringify('issues'));
	fetchIsuues();
}
