source ~/Pycharm/LaGuadalupanaRestaurante/pythonProject/.venv
pip install --upgrade pip
pip install -r requirements.txt
reflex init
reflex export --frontend-only
rm -rf public
unzip frontend.zip -d public
rm -f frontend.zip
