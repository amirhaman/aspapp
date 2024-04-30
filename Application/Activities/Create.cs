using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.Activities
{
    public class Create
    {
        // command do not return anything so we dont pass the type
        public class Command : IRequest
        {
            public Activity Activity { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly ILogger<List> _logger;
            
            public Handler(DataContext context , ILogger<List> logger)
            {
                _logger = logger;
                _context = context;
            }
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
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

                // adding the activity in memory not need to use async 
                _context.Activities.Add(request.Activity);

                await _context.SaveChangesAsync();
            }
        }
    }
}