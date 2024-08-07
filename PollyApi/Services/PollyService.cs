using Amazon.Polly;
using Amazon.Polly.Model;
using Microsoft.Extensions.Options;
using Amazon.Extensions.NETCore.Setup;

public class PollyService
{
    private readonly IAmazonPolly _pollyClient;
    private readonly AWSOptions _awsOptions;

    public PollyService(IAmazonPolly pollyClient, IOptions<AWSOptions> awsOptions)
    {
        _pollyClient = pollyClient;
        _awsOptions = awsOptions.Value;
    }

    public async Task<Stream> SynthesizeSpeechAsync(string text)
    {
        var request = new SynthesizeSpeechRequest
        {
            Text = text,
            OutputFormat = OutputFormat.Mp3,
            VoiceId = VoiceId.Joanna
        };

        var response = await _pollyClient.SynthesizeSpeechAsync(request);
        return response.AudioStream;
    }
}
