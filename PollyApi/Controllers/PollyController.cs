using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class PollyController : ControllerBase
{
    private readonly PollyService _pollyService;

    public PollyController(PollyService pollyService)
    {
        _pollyService = pollyService;
    }

    [HttpPost("synthesize")]
    public async Task<IActionResult> SynthesizeSpeech([FromBody] string text)
    {
        var audioStream = await _pollyService.SynthesizeSpeechAsync(text);
        if (audioStream == null)
        {
            return BadRequest("Unable to synthesize speech.");
        }

        return File(audioStream, "audio/mp3", enableRangeProcessing: true);
    }
}
