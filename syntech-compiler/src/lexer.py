import ply.lex as lex

tokens = (
    'HEADER',
    'TEXT',
    'BOLD',
    'ITALIC'
)

t_HEADER = r'\#\d\{.*?\}'
t_TEXT = r'[^#*]+'
t_BOLD = r'\*\*[^*]+\*\*'
t_ITALIC = r'\*[^*]+\*'



def t_error(t):
    print(f"Illegal character `{t.value[0]}`")
    t.lexer.skip(1)


lexer = lex.lex()
