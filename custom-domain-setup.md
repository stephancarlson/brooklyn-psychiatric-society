# Brooklyn Psychiatric Society Custom Domain Setup

Created: 2026-03-23

## Goal

Point the live GitHub Pages site:

- `https://stephancarlson.github.io/brooklyn-psychiatric-society/`

to a branded domain such as:

- `www.brooklynpsychiatricsociety.org`

Recommended production setup:

- Primary public URL: `www.brooklynpsychiatricsociety.org`
- Redirect variant: `brooklynpsychiatricsociety.org`

This follows GitHub's recommendation to use `www` even when the apex domain is also configured.

## Current GitHub Pages Target

- Repository: `stephancarlson/brooklyn-psychiatric-society`
- Pages source: `main` branch, `/`
- Current Pages URL: `https://stephancarlson.github.io/brooklyn-psychiatric-society/`
- Current custom domain: none

## Step 1: Buy Or Confirm The Domain

Recommended first choice:

- `brooklynpsychiatricsociety.org`

Backups:

- `brooklynpsych.org`
- `bkpsych.org`

If the domain is already owned, confirm:

- who controls DNS
- whether the apex and `www` are both available
- whether email forwarding or Google Workspace will also be attached

## Step 2: Add The Custom Domain In GitHub First

GitHub recommends adding the custom domain in repository settings before configuring DNS.

Open:

- `https://github.com/stephancarlson/brooklyn-psychiatric-society/settings/pages`

Under `Custom domain` enter:

- `www.brooklynpsychiatricsociety.org`

Click `Save`.

When GitHub accepts it, Pages will create a `CNAME` file in the publishing branch for this branch-based Pages site.

## Step 3: Configure DNS At The Registrar / DNS Provider

Use this exact model:

### Preferred configuration

Primary domain served by GitHub Pages:

- `www.brooklynpsychiatricsociety.org`

Redirect/alternate domain:

- `brooklynpsychiatricsociety.org`

### DNS records to add

#### For `www`

Create a `CNAME` record:

- Host / Name: `www`
- Value / Target: `stephancarlson.github.io`

Important:

- point to `stephancarlson.github.io`
- do not include the repository name

#### For apex root domain

Create these four `A` records:

- Host / Name: `@`
- Value: `185.199.108.153`

- Host / Name: `@`
- Value: `185.199.109.153`

- Host / Name: `@`
- Value: `185.199.110.153`

- Host / Name: `@`
- Value: `185.199.111.153`

Optional IPv6 support:

Add these `AAAA` records:

- `2606:50c0:8000::153`
- `2606:50c0:8001::153`
- `2606:50c0:8002::153`
- `2606:50c0:8003::153`

## Step 4: Wait For DNS Propagation

GitHub notes DNS changes can take up to 24 hours to propagate.

In practice it is often faster, but do not treat early failure as final.

## Step 5: Verify DNS

Run:

```bash
dig www.brooklynpsychiatricsociety.org +nostats +nocomments +nocmd
dig brooklynpsychiatricsociety.org +noall +answer -t A
dig brooklynpsychiatricsociety.org +noall +answer -t AAAA
```

You want to see:

- `www` resolving by `CNAME` to `stephancarlson.github.io`
- apex resolving to the four GitHub Pages `A` records
- optional IPv6 resolving to the GitHub Pages `AAAA` records

## Step 6: Enforce HTTPS

Return to:

- `https://github.com/stephancarlson/brooklyn-psychiatric-society/settings/pages`

When GitHub enables it, check:

- `Enforce HTTPS`

This option can take time to appear after DNS is correct.

## Step 7: Confirm Redirect Behavior

After GitHub finishes provisioning:

- `www.brooklynpsychiatricsociety.org` should load the site
- `brooklynpsychiatricsociety.org` should redirect to `www.brooklynpsychiatricsociety.org`

## Step 8: Update Public References

After the custom domain is live, replace references to:

- `https://stephancarlson.github.io/brooklyn-psychiatric-society/`

with:

- `https://www.brooklynpsychiatricsociety.org/`

Likely files to update:

- `ASSET_INDEX.md`
- `README.md`
- `links.html`
- Claude handoff document
- social bios in `digital-presence-copy-kit.md`

## Do Not Do These Things

- Do not use wildcard DNS records like `*.example.com`
- Do not point `www` to the apex domain instead of directly to `stephancarlson.github.io`
- Do not add DNS before setting the GitHub custom domain field
- Do not include the repository name in the CNAME target

## Best-Next Manual Action

1. Buy or confirm `brooklynpsychiatricsociety.org`
2. Open GitHub Pages settings
3. Enter `www.brooklynpsychiatricsociety.org`
4. Add the DNS records above at the registrar
5. Wait for HTTPS to become available

## References

- GitHub Docs: Configuring a custom domain for your GitHub Pages site
- GitHub Docs: Managing a custom domain for your GitHub Pages site
