# 🔒 Security Policy

## 🌟 Supported Versions

This project follows **continuous deployment** with security-focused updates. The main branch always receives security updates:

| Deployment | Supported?          | Security Updates Until |
|------------|---------------------|------------------------|
| Production | ✅ Yes (Active)     | Ongoing                |
| Staging    | ✅ Yes (Testing)    | 30 days after deploy   |
| Archive    | ❌ No (Read-only)   | N/A                    |

We recommend always using the latest deployed version for optimal security.

---

## 🚨 Reporting a Vulnerability

**Your expertise makes us safer!** Please responsibly disclose vulnerabilities via:

✉️ **Preferred Method**:  
[security@chiragrai.dev](mailto:security@chiragrai.dev) (PGP Key available [here](/security.pgp))  
*Please prefix subject with "[SECURITY]"*

🔒 **Alternative**:  
Use GitHub's [Private Vulnerability Reporting](https://github.com/ChiragRaiCR7/portfolio/security/advisories)

### What to Include:
- Detailed vulnerability description
- Proof-of-Concept (PoC) steps
- Impact assessment
- Suggested remediation (optional)
- Disclosure preferences

---

## 🔄 Our Response Process

1. **Acknowledgment**  
   - Initial response within **24-48 hours**

2. **Investigation**  
   - Triage within **3 business days**

3. **Resolution**  
   - Critical issues: Patch within **72 hours**  
   - High severity: Patch within **7 days**  
   - Medium/Low: Next scheduled update

4. **Disclosure**  
   - Public advisory after patch deployment
   - Credit unless requested otherwise

---

## 🛡️ Security Practices

### Development Standards
- Regular dependency audits (Dependabot-enabled)
- Static code analysis (CodeQL/SonarCloud)
- OWASP Top 10 compliance
- HTTPS enforced (TLS 1.3+ only)

### Scope Considerations
**In-Scope**  
- Authentication flaws
- Data exposure risks
- Injection vulnerabilities
- Critical dependency CVEs

**Out-of-Scope**  
- Theoretical vulnerabilities
- UI/UX bugs without security impact
- Social engineering attacks

---

## 🙏 Recognition Program

We gratefully recognize security researchers through:

- Public acknowledgment in [SECURITY.md](/SECURITY.md)
- Profile badge on project README
- Letter of recommendation (upon request)

---

## 📜 Policy Updates

This policy is reviewed quarterly. Last updated: **2024-03-15**

[View Changelog](/SECURITY_CHANGELOG.md) | [View Compliance Certs](/COMPLIANCE.md)