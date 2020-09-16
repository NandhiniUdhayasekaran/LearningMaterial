using System;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebHooks;
using static GitHubReceiver.Models.GitHubModel;

namespace GitHubReceiver.Controllers
{

    public class GitHubController : ControllerBase
    {

        public string result;
        public string response;
        string filePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "Repo");

        [HttpGet]
        [Route("/")]
        public string GetAllActivities()
        {
            filePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/Repo", "OpenedIssue.txt");
            using (StreamReader sr = new StreamReader(filePath))
            {
                while ((result = sr.ReadLine()) != null)
                {

                    response = response + Environment.NewLine + result;

                }

            }
            return response;
        }
        [HttpPost]
        //[Route("api/[controller]")]
        [GitHubWebHook]
        public HttpResponseMessage Post([FromBody] RootObject rootObject)
        {

            string issues = "Login Name: " + rootObject.sender.login.ToString() + Environment.NewLine;
            issues += "Login Id: " + rootObject.sender.id.ToString() + Environment.NewLine;
            issues += "Created Date: " + rootObject.repository.created_at.ToString() + Environment.NewLine;
            issues += "Open Issues: " + rootObject.repository.open_issues_count.ToString() + Environment.NewLine;
            issues += "Repository Name: " + rootObject.repository.name.ToString() + Environment.NewLine;
            issues += "Action: " + rootObject.action.ToString() + Environment.NewLine;
            issues += "Title: " + rootObject.issue.title.ToString() + Environment.NewLine;
            issues += "Comment: " + rootObject.issue.body.ToString();

            string actionPath = "";
            string issueStatus = rootObject.action.ToString();
            if (issueStatus == "opened")
            {
                actionPath = System.IO.Path.Combine(filePath, "OpenedIssue.txt");

            }
            else if (issueStatus == "closed")
            {
                actionPath = System.IO.Path.Combine(filePath, "ClosedIssue.txt");

            }
            else
            {
                actionPath = System.IO.Path.Combine(filePath, "OtherActions.txt");

            }

            System.IO.File.WriteAllText(actionPath, issues);

            string fileName = "CommitmentDoc.pdf";

            string localFilePath = System.IO.Path.Combine(filePath, fileName);

            HttpResponseMessage response = new HttpResponseMessage(HttpStatusCode.OK);
            response.Content = new StreamContent(new FileStream(localFilePath, FileMode.Open, FileAccess.Read));
            response.Content.Headers.ContentDisposition = new System.Net.Http.Headers.ContentDispositionHeaderValue("attachment");
            response.Content.Headers.ContentDisposition.FileName = fileName;
            response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/pdf");

            return response;
        }

    }
}