using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.Activities
{
    public class List
    {
        public class Query : IRequest<List<Activity>> {}

        public class Handler : IRequestHandler<Query, List<Activity>>
        {
            // we also need access to the database
            private readonly DataContext _context;
            private readonly ILogger<List> _logger;
            public Handler(DataContext context, ILogger<List> logger)
            {
                _logger = logger;
                _context = context;
            }
            // because it is the task it should be async
            // to make cancelationToken work we need to pass the cancelation Token to Activities.Controller.cs to the Handler which for example this Handler file
            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                _logger.LogInformation($"cancelationToken is {cancellationToken}");
                // turn on following line to test cancelation
                // try
                // {
                //     for (var i = 0; i< 10; i++)
                //     {
                //         // access cancelationToken throw if canceled
                //         cancellationToken.ThrowIfCancellationRequested();
                //         await Task.Delay(1000, cancellationToken);
                //         _logger.LogInformation($"Task {i} has completed");
                //     }
                // }
                // catch (System.Exception)
                // {
                    
                //     _logger.LogInformation($"Task canceled");
                // }
                
                return await _context.Activities.ToListAsync();
            }
        }
    }
}