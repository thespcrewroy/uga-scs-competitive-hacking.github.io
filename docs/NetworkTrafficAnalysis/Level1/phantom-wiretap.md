---
description: "Network Traffic Analysis | Level 1 - Phantom Wiretap"
sidebar_position: 0
tags: [level1]
---

import PasswordForm2 from '@site/src/components/PasswordForm2';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DownloadLink from '@site/src/components/DownloadLink';
import '@site/src/components/css/challengeBox.css';

# Phantom Wiretap

Network Traffic Analysis | Level 1 - Phantom Wiretap

<div className="challenge-box">
  ## Challenge
  A covert monitoring system known as Phantom Wiretap captured a stream of suspicious network traffic from a compromised internal workstation. Investigators believe the user was communicating with hidden infrastructure and exfiltrating encoded data through DNS queries.

  <a href="/assets/NetworkTrafficAnalysis/phantom.pcapng" download class="download-btn-link">
    <button type="button" class="download-btn">Download phantom.pcapng</button>
  </a>

Q1. What is the transaction ID of the first DNS query to the domain thehackpack.thp.lan?
<PasswordForm2 hash="a4071a66307f7b51262d0b671bda4ce66708748cf7def1766603d2d7f5815fdd039795af054c5dc416a4dbda23c84adce991b6533eea0fad13e4eadb5779db2f" algorithm="sha512" challengeName = "Phantom Wiretap 1"  />

Q2. Which email-related hostnames are queried in the capture (separated by commas AND in the order of the packet capture: [string], [string], ...)?
<PasswordForm2 hash="bfa7177cebb04940e5445c9a52440c97780de64395da717d4c26d2652c255f49d758bc6bb334954cc08d3efd8c9c29202f5df3bd337dead50d450479a54231af" algorithm="sha512" challengeName = "Phantom Wiretap 2"  />

Q3. A DNS response for target.thp.lan contains multiple A records. What is the second IPv4 address returned in that response?
<PasswordForm2 hash="fca0dec023399546586746b906bfe1d317dc6b176814e9651cfd256c36e4e6c08b6efb1ceba38058a04a9402234551b91dab5a2163c7b5d12d9d6a9ade5ca8ab" algorithm="sha512" challengeName = "Phantom Wiretap 3"  />

Q4. What is the DNS transaction ID in frame 11?
<PasswordForm2 hash="7d13a80cca0621286f31913144bf33d0de14cbf8bf680ca5c0b5b6fd372cc45adce06616fa3af06debdfd4cf7cb9445904f5b585abad6f74a7a728605db7aa00" algorithm="sha512" challengeName = "Phantom Wiretap 4"  />

Q5. The domain flag.thp.lan returns both A and AAAA records. The returned IP values encode a hidden message THP-AA#A-####. Decode that IP values to get the flag.
<PasswordForm2 hash="5fc09281425ff403b8efdf0959d685902a0a78043dc61f641e5f1a5822266056fca8ccfffd4ba5ac9005dd58455898a02737656d46a9c35fe4c17406a60b6bb1" algorithm="sha512" challengeName = "Phantom Wiretap 5"  />

Q6. What is the average DNS payload size in bytes (to 2 decimal places)?
<PasswordForm2 hash="9d52f0bc8fa5233a99e59a0e742ef1e988187e40139fa23130a4c1d8654353345abeccbb40082066bfa31917042d5de369a7e234107b857a9827759b9e886e2c" algorithm="sha512" challengeName = "Phantom Wiretap 6"  />

</div>

## Solution

<details>
    <summary>Solution Guide</summary>

    NOT FINISHED: Need to Personalize and Add Hints.

    Over 75% of log analysis challenges can be solved with [**Excel**](https://www.microsoft.com/en-us/microsoft-365/excel). Thus, **Math Rock** attempts to be an introduction to using Excel in order to solve log analysis challenges. After mastering Excel, it is recomended to learn DAAS tools like Splunk, Datadog, or Solarwinds to further refine your log analysis skills to become a master in this hacking form.

    The .log file is seperated into 4 columns: Time, Ticker, Frequency, and Amplitude. Now, we need to find a way to copy and paste each column as it's own column in excel. However, when I try to copy and paste the log file into excel, it puts all the data in one column, which is not what we want. Thus, we rely on good ol' reliable python to extract each individual column of the dataframe.

    I have provided the python file to help you with extraction in the **HINT**. Now if there was a way to copy and paste each individual column from the log file to their own respective column in the excel sheet without python, then be my guest. However, in this case, we are using the help of python to seamlessly copy over the data so that the excel sheet can mirror the log file.

    Although the python file extracts all the columns, we really only need to copy over 'time', 'amplitude' columns, and maybe the 'Ticker' column as well. Once you copied over the numbers and their headers to excel, select ONLY the ‘frequency’ and ‘amplitude’ columns. After selecting the two columns, search for ‘XY scatter’ and select the first scatter plot option. You should see an outlier in the data among the 'Y' axis. There is only one ticker that goes beyond the [-1.00, 1.00] Hertz frequency bound, and that ticker is the flag!

    P.S. This is the actual frequency data extracted from a snippit of a ichika-nito solo. You can reconvert the audio back into the actual song using Audacity in order to hear the sound byte.

</details>

## Credits

- Author(s): Swapnil Roy (thespcrewroy)
