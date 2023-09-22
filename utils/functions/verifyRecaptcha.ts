type ReCaptchaResponse = {
  success: boolean;
  message: string;
  score: number;
  passed: boolean;
}

// Verifies a v3 Google reCaptcha
export async function verifyRecaptcha(
  secretKey: string, 
  token: string, 
  minScore = 0.5
): Promise<ReCaptchaResponse> {
  // Construct the URL
  const url = `https://www.google.com/recaptcha/api/siteverify
    ?secret=${secretKey}
    &response=${token}`;

  // Make the fetch request
  const {success, message, score} = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json());

  return {
    success, 
    message, 
    score: score || 0, 
    passed: score && score > minScore,
  }
}