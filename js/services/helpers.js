// Decodes the base64-encoded content of the README
export async function decodeContent(data) {
    try {
        const content = atob(data.content); // Decode base64 content
        //console.log('Decoded Content:', content);
        return content;
    } catch (error) {
        console.error('Failed to decode content:', error);
        return null;
    }
}

// Filters the README content for Frameworks and Tools sections
export async function filterREADME(content) {
    let repoDetails = [];

    // Use regex to match the Frameworks and Tools sections
    const frameworksSection = content.match(/### Frameworks(.|\n)*?(?=###|$)/);
    const toolsSection = content.match(/### Tools(.|\n)*?(?=###|$)/);

    // Check if both sections exist
    if (frameworksSection) {
        repoDetails = repoDetails.concat(frameworksSection[0]); // Add frameworks section
    } else {
        repoDetails.push("Visit the Repository to see the frameworks used.");
    }

    if (toolsSection) {
        repoDetails = repoDetails.concat(toolsSection[0]); // Add tools section
    } else {
        repoDetails.push("Visit the Repository to see the tools used.");
    }

    return repoDetails;
}

// Helper function to extract framework and tool names using regular expressions
export function extractNames(content, sectionTitle) {
    const sectionRegex = new RegExp(`### ${sectionTitle}([\\s\\S]*?)(?=###|$)`, 'g');
    const sectionMatch = sectionRegex.exec(content);
  
    if (sectionMatch) {
      const namesRegex = /-\s\*\*(.*?)\*\*/g;
      let match;
      const names = [];
  
      while ((match = namesRegex.exec(sectionMatch[0])) !== null) {
        names.push(match[1]);
      }
  
      return names;
    }
    return [];
  }
