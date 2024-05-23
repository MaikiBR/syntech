import ply.lex as lex

tokens = (
    'HEADER1',
    'HEADER2',
    'HEADER3',
    'BOLD',
    'ITALIC',
    'BOLDITALIC',
    'UNDERLINE',
    'NEWLINE',
    'ULISTSTART',
    'ULISTEND',
    'OLISTSTART',
    'OLISTEND',
    'LISTITEM',
    'LINK',
    'PLAINTEXT',
    'CODE',
    'IMAGE',
    'ANYCHAR',
)

t_HEADER1 = r'\#1\{[^\}]*\}'  # H101
t_HEADER2 = r'\#2\{[^\}]*\}'  # H102
t_HEADER3 = r'\#3\{[^\}]*\}'  # H103
t_BOLD = r'\*\*[^\*]+\*\*'  # H104
t_ITALIC = r'\*[^\*]+\*'  # H105
t_BOLDITALIC = r'\*\*\*[^\*]+\*\*\*'  # H106
t_UNDERLINE = r'\_[^\_]+\_'  # H107
t_NEWLINE = r'\#'  # H108
t_ULISTSTART = r'\\begin\{ulist\}'  # H109
t_ULISTEND = r'\\end\{ulist\}'  # H109
t_OLISTSTART = r'\\begin\{olist\}'  # H110
t_OLISTEND = r'\\end\{olist\}'  # H110
t_LISTITEM = r'\* [^\n]+'  # H109 y H110
t_LINK = r'\[\[[^\]]+\]\{[^\}]+\}\]'  # H111
t_PLAINTEXT = r'\"[^\"]+\"'  # H112
t_CODE = r'\<\>[^\<\>]+\<\>'  # H114
t_IMAGE = r'\[\[\]img:[^\]]+\]'  # H115
t_ANYCHAR = r'[^\#\*\_\\\<\>\[\]\{\}\"]+'  # Any character except special ones
t_ignore = ' \t'


def t_error(t):
    print(f"Illegal character `{t.value[0]}`")
    t.lexer.skip(1)


lexer = lex.lex()
