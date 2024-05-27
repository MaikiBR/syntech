import ply.yacc as yacc
from syntechlexer import tokens


def p_expression(p):
    '''expression : expression expression
                  | HEADER1
                  | HEADER2
                  | HEADER3
                  | BOLD
                  | ITALIC
                  | BOLDITALIC
                  | UNDERLINE
                  | NEWLINE
                  | ULISTSTART expression ULISTEND
                  | OLISTSTART expression OLISTEND
                  | LISTITEM
                  | LINK
                  | PLAINTEXT
                  | CODE
                  | IMAGE
                  | ANYCHAR'''
    if len(p) == 3:
        p[0] = p[1] + p[2]
    elif len(p) == 4:
        if p[1] == '\\begin{ulist}' and p[3] == '\\end{ulist}':
            p[0] = f'<ul className="list-disc list-inside">{p[2]}</ul>'
        elif p[1] == '\\begin{olist}' and p[3] == '\\end{olist}':
            p[0] = f'<ol className="list-decimal list-inside">{p[2]}</ol>'
    else:
        if p.slice[1].type == 'HEADER1':
            p[0] = f'<h1>{p[1][3:-1]}</h1>'
        elif p.slice[1].type == 'HEADER2':
            p[0] = f'<h2>{p[1][3:-1]}</h2>'
        elif p.slice[1].type == 'HEADER3':
            p[0] = f'<h3>{p[1][3:-1]}</h3>'
        elif p.slice[1].type == 'BOLD':
            p[0] = f'<b>{p[1][2:-2]}</b>'
        elif p.slice[1].type == 'ITALIC':
            p[0] = f'<i>{p[1][1:-1]}</i>'
        elif p.slice[1].type == 'BOLDITALIC':
            p[0] = f'<b><i>{p[1][3:-3]}</i></b>'
        elif p.slice[1].type == 'UNDERLINE':
            p[0] = f'<u>{p[1][1:-1]}</u>'
        elif p.slice[1].type == 'NEWLINE':
            p[0] = '<br>'
        elif p.slice[1].type == 'LISTITEM':
            p[0] = f'<li>{p[1]}</li>'
        elif p.slice[1].type == 'LINK':
            link_text = p[1][2:-1]
            url, title = link_text.split(']{')
            url = url.strip('[')
            title = title.strip('}')
            if not url.startswith('http://') and not url.startswith('https://'):
                url = 'https://' + url
            p[0] = f'<a href="{url}" target="_blank">{title}</a>'
        elif p.slice[1].type == 'PLAINTEXT':
            p[0] = p[1][1:-1]
        elif p.slice[1].type == 'CODE':
            p[0] = f'<code>{p[1][2:-2]}</code>'
        elif p.slice[1].type == 'IMAGE':
            p[0] = f'<img src="{p[1][7:-1]}" />'
        elif p.slice[1].type == 'ANYCHAR':
            p[0] = p[1]


def p_error(p):
    print("Syntax error in input!")


parser = yacc.yacc()
