try:
    from transformers import AutoModelForCausalLM, AutoTokenizer
    print("Les bibliothèques transformers et torch sont importées correctement.")
except ImportError as e:
    print("Erreur d'importation:", e)
